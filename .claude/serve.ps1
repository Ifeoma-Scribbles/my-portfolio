param([int]$Port = 5173)
# Minimal static file server for local preview (no Node/Python needed).
$root = (Resolve-Path "$PSScriptRoot\..").Path
$types = @{ ".html"="text/html; charset=utf-8"; ".css"="text/css"; ".js"="text/javascript"; ".webp"="image/webp"; ".jpg"="image/jpeg"; ".png"="image/png"; ".svg"="image/svg+xml"; ".pdf"="application/pdf" }
$l = New-Object System.Net.HttpListener
$l.Prefixes.Add("http://localhost:$Port/")
$l.Start()
Write-Host "Serving $root on http://localhost:$Port/"
while ($l.IsListening) {
  $c = $l.GetContext()
  $rel = [Uri]::UnescapeDataString($c.Request.Url.AbsolutePath.TrimStart("/"))
  if ($rel -eq "") { $rel = "index.html" }
  $p = Join-Path $root $rel
  if ((Test-Path $p -PathType Leaf) -and ((Resolve-Path $p).Path.StartsWith($root))) {
    $b = [IO.File]::ReadAllBytes($p)
    $ext = [IO.Path]::GetExtension($p).ToLower()
    $c.Response.ContentType = if ($types[$ext]) { $types[$ext] } else { "application/octet-stream" }
    $c.Response.OutputStream.Write($b, 0, $b.Length)
  } else { $c.Response.StatusCode = 404 }
  $c.Response.Close()
}
