# Ifeoma Ewim Portfolio — Review Pack (for approval, nothing built)

**Status:** Planning only. No website code has been written.
**Labels used:** **[Confirmed]** = you already decided it · **[Proposed]** = my suggestion, needs your yes · **[Open]** = missing, needs your input.

This pack sits on top of two files you already have:
- `ifeoma_portfolio_master_document_revised.md` — the content source of truth (deliverable 2)
- `ifeoma_portfolio_staged_build_prompts.md` — the build prompts (deliverable 3)

They are mostly sound. Section 7 lists the few places where they contradict each other or your latest instructions; I have **not** edited your originals.

## Update 2 — your decisions and the CV (supersedes anything below that disagrees)

### Decisions recorded **[Confirmed]**
- Illustration stays as it is (bob haircut). No redraw.
- **SwiftEntry appears twice, with different jobs.** In Product Management it is a compact project card (what the product was, my role, delivery). It also gets its own chapter after both disciplines, which tells the "feature works, workflow doesn't" story. The card must not repeat the chapter; it links to it.
- Public copy says "a product designer", not the designer's name.
- Venstoc user figures (69 users) are left out.
- Builder: custom-coded site in this folder.
- Domain and hosting: on hold. Not a blocker until launch.

### What the CV answers
| Item | From the CV |
|---|---|
| Email | ewimifeoma@gmail.com |
| LinkedIn | linkedin.com/in/ifeoma-ewim |
| Phone | +234 913 870 3880 (**still your choice whether to publish**) |
| Venstoc | Concept to launch; **launched September 2026**. Status now verified. |
| SwiftEntry | Took over at about 50% of the MVP; **Version 1.0 delivered in six months; adopted by two enterprise clients**; tested workflows, supported client UAT |
| Naderkela | Freelance since June 2026; **load tests from 500 to 5,000 concurrent users, with a stability failure at 5,000 reported to engineering** |
| NuloAfrica | May to June 2026; 140+ cases, 14 areas confirmed; **the defect is a Tenant account briefly reaching the Landlord dashboard via Google OAuth**; also Paystack payment validation and a Postgres/Supabase failure traced for engineering |
| NEMSAS | Handover is **in progress**, not complete. Copy must say so. |
| Other | Employer: Texis HQ (formerly Sydani). QA also done on Manorr and Sydaar LMS (too thin for case studies). |

### New conflicts the CV exposed — I need your answer
1. **HemoTracker.** The master document describes a *donor-matching concept* (requester alerts nearby donors). The CV describes **HemoTrackr, a blood-bank and hospital inventory platform** that was completed but not yet adopted. Are these the same project, two projects, or has it changed? Which name and spelling should the site use, and is it a concept or a built product?
2. **SwiftEntry story.** The master draft says you noticed cumbersome workflows, got your manager's approval, and worked with developers on selected improvements. The CV says you ran follow-up sessions with front-desk and admin users to understand **low routine use after adoption**. Both could be true, but I shouldn't merge them without you. What was the actual sequence? Are "two enterprise clients" and "v1.0 in six months" fine to publish?
3. **Name spelling.** The CV says "Nadekela"; the master document says "Naderkela". Which is right?
4. **Disclosure level.** The CV is more specific than the master document in three places: the 5,000-user failure, the OAuth defect, and the source-code/database-backup handover for NEMSAS. A public site reaches more people than a CV does. My suggestion: publish the load range and the failure at 5,000 if the client is fine with it, describe the defect as "a role-based access issue" without the Google OAuth detail, and keep source code and backups out of NEMSAS copy entirely. Is that right?
5. **Name on the site.** "Ifeoma Ewim" (as in your brief) or "Ifeoma Gloria Ewim" (as on the CV)?
6. **Digital health.** The CV leads with "Digital Health". Your brief said to keep the site on product and QA. Should digital health appear as a quiet line (for example under About) or not at all?
7. **Phone.** It is on your CV. If the CV is downloadable from the site, the phone becomes public either way. Keep it, or send me a public version without it?
8. **NEMSAS naming.** Permission to name it publicly is still unconfirmed. I'd show it only as "a national emergency services platform" until you say otherwise.

### Answers to the 8 questions **[Confirmed]**
1. HemoTracker and HemoTrackr are the same project. **Spelling: HemoTrackr.** Per the CV it is a completed platform that has not yet been adopted. The old "concept" label and donor-matching description in the master document are superseded. *Still to confirm: whether donor matching is part of the product or only the original idea. Until then, copy follows the CV only.*
2. SwiftEntry story order: she spotted cumbersome workflows first, then raised it, got approval, gathered front-desk and admin feedback, and worked with developers. The CV's low-routine-use follow-up sessions come later, after adoption.
3. Spelling: **Naderkela.**
4. Disclosure: publish the 500 to 5,000 load range and the failure at 5,000; describe the access defect as a role-based access issue; no source code or backups in NEMSAS copy.
5. Site name: **Ifeoma Gloria Ewim.**
6. Digital health: left out of the site.
7. Phone number: **published.**
8. NEMSAS appears as "a national emergency services platform".

### Still open, unchanged
Screenshots and evidence for every project, a public-safe CV file, reference recordings, and the permission check for Venstoc and SwiftEntry.

---

## 0. What I could and could not access

| Source | Access |
|---|---|
| The two Markdown files above | Read in full |
| Your portrait (braids, tan blazer, brown satin top) | Seen, saved to `assets/supplied/portrait.webp` |
| Your illustration (bob haircut, tan suit, walking) | Seen, saved to `assets/supplied/illustration-draft.jpg` |
| Earlier ChatGPT conversation, Drive, LinkedIn, CV | **No access.** Everything I know comes from the two files. |
| Lola Adey, Reboot Camp, PostHog | **Not inspected.** No URLs given. A web page's text can't show me animation anyway. Please send a 10–20 second screen recording of each effect you like. |
| Project screenshots, test sheets, flow diagrams | Not supplied |

---

## 1. Website brief

**Owner:** Ifeoma Ewim — Product Manager & QA Professional (Product Management & Quality Assurance) **[Confirmed]**
**Tagline:** “I think it through. I test it, too.” **[Confirmed]**
**Audience:** recruiters/hiring managers first; freelance clients (including remote) second **[Confirmed]**
**Idea in one line:** Product thinking and QA are two halves of one habit: asking whether something works *for the person using it*. **[Confirmed]**
**One page**, scrollable, no separate project pages **[Confirmed]**
**CTAs:** primary “Explore my work”, secondary “Work with me”, plus “Download CV” **[Confirmed]**
**Contact:** clickable email + LinkedIn, phone only if you choose. No form, prices, packages, booking links, testimonials **[Confirmed]**
**Never:** imply you code or are a developer **[Confirmed]**

### Project selection (what each one proves)

| Project | Home | What it demonstrates | Status |
|---|---|---|---|
| Venstoc | Product Management | Owning a product from idea to launch | Facts known; permission and evidence **[Open]** |
| NEMSAS | Product Management | Cross-team coordination, handover docs, acceptance criteria | Heavy confidentiality limits; include only if a safe summary exists **[Open]** |
| Product Flow Mapping & User Journey Design | Product Management | Independent research, user journeys from a vague brief | **[Confirmed]** anonymised screenshots allowed |
| HemoTracker/HemoTracka | Product Management (optional) | Problem framing; labelled **concept** | I'd keep it optional **[Proposed]** |
| Naderkela | QA | Multi-role end-to-end testing, JMeter, light ZAP, Lighthouse, regression | **[Confirmed]** naming and redacted screenshots OK |
| NuloAfrica | QA | 140+ test cases, 14 areas, API testing, high-priority access-control defect | **[Confirmed]** naming OK; the “140+ / 14 / defect” figures are your own and the brief flags them “verify” |
| SwiftEntry | Its own connecting chapter | Feature worked, workflow didn't; listening to users, working with developers | Narrative **[Proposed]**, needs your approval |

Why this split: PM and QA each get different projects, so neither section repeats the other, and SwiftEntry is the one story that shows both at once.

### How the immersive experience works (plain language)
- The page stays one page. Picking **Product Management** or **Quality Assurance** slides a full-screen “chapter” over it, like a film chapter. Scrolling inside it reveals each project in turn. **[Proposed]**
- Every chapter has an always-visible **Close / Skip** button, the Esc key closes it, and the phone's Back button closes it rather than leaving the site. Nobody gets trapped. **[Proposed, required by your brief]**
- At the end of a chapter: “Back to the two paths” and “Explore [the other discipline]”. **[Proposed]**
- Projects appear as compact cards that open into a full case-study view, as you confirmed for Naderkela and NuloAfrica.
- “Reduced motion” means: if a visitor's device is set to avoid animation, the site shows the same content with plain fades or none. Sound, if used at all, is off by default with a visible toggle. I suggest **skipping sound at launch**; it adds risk and little value. **[Proposed]**

### Visual direction
Palette direction **[Confirmed]**; exact values **[Proposed]**:

| Role | Colour | Value |
|---|---|---|
| Soft lavender (panels, highlights) | | `#D8CCEE` |
| Dusty teal (accents) | | `#6F9D9A` |
| Teal for text/buttons on cream (darker, for contrast) | | `#35706C` |
| Cream (main background) | | `#FBF6EC` |
| Cotton (alternate sections) | | `#F2E9DB` |
| Warm brown | | `#8A6248` |
| Cocoa (body text, dark sections) | | `#4A332C` |
| Muted plum (rare dark sections) | | `#3B2A3C` |

Fonts **[Proposed]**, free from Google Fonts:
- **Fraunces** for big headings: a soft, slightly quirky serif. Warm and expressive without being childish.
- **DM Sans** for body text, buttons and case-study detail: clean and easy to read at any size.
- **Caveat** (handwritten), used very sparingly for arrow labels and margin notes, to give the “playful annotation” feel.

Hero image: use your real portrait. It is shot on a dark grey background, which will clash with the light palette, so it should be cut out and placed on a lavender or cream shape, or cropped into a panel.

### Illustrated guide
You supplied a draft. Observations:
- Outfit matches the portrait (tan blazer, brown top, gold accents, white trainers).
- **The hair does not match.** The drawing has a black bob; your portrait has long braids. Skin tone is also a little lighter. If it should read as you, I'd ask for a revised drawing with braids. **[Open — your call]**
- It's one walking pose on white. Poses needed for use as a guide: pointing, looking up (already close), waving/arrival, maybe seated. Needs a transparent background. **[Open]**
- Use at 4–5 moments only: hero hand-off, discipline selector, chapter transitions, SwiftEntry, contact. Not beside every button. **[Proposed]**

---

## 2. Master content
Exact copy for every section is already in `ifeoma_portfolio_master_document_revised.md` §4 (hero, About, selector, PM, QA, SwiftEntry, freelance, contact, footer). I recommend keeping it as is after the corrections in §7.

---

## 3. Staged build prompts
Your prompt pack has 9 prompts (0–8). They map onto the six-stage sequence you asked for like this, so the pack already covers it:

| Your 6 stages | Prompt pack |
|---|---|
| (planning gate) | Prompt 0 |
| 1 Foundation and hero | Prompt 1 + hero part of Prompt 2 |
| 2 About + discipline cards | Prompt 2 |
| 3 Product Management | Prompt 3 |
| 4 Quality Assurance | Prompt 4 |
| 5 SwiftEntry + contact | Prompt 5 |
| 6 Motion and polish | Prompts 6, 7, 8 (polish, content/confidentiality audit, launch check) |

Prompt 7 (the audit against your master doc) is a good extra. Fix the issues in §7 before using them.

**Builder note:** the prompts say “website builder”, but none is chosen. This folder is a git project and I'm a coding tool, so the natural option is that I build it here as a hand-coded site you can host anywhere (Netlify, Vercel, GitHub Pages). If you prefer Framer or Webflow, the immersive chapters are harder to achieve, and the prompts need rewording. **[Open — decision needed]**

---

## 4. Asset mapping

| Asset | Section | Purpose | Supplied | Approved for public | Prep needed |
|---|---|---|---|---|---|
| Portrait | Hero (+ contact) | Real face first | Yes (seen) | Confirm | Cut out from grey; crop |
| Illustrated Ifeoma | Selector, chapters, SwiftEntry, contact | Friendly guide | Draft only | No | Braids? Poses? Transparent background |
| CV | Hero link, footer | Download | No | — | PDF, public-safe (no phone/address unless wanted) |
| Email | Contact, footer | Direct contact | No | — | — |
| LinkedIn URL | Contact, footer | Credibility | No | — | — |
| Phone | Contact | Optional | No | — | Only if you say so |
| Venstoc screenshots / link | PM | Evidence | No | No | Remove private data |
| NEMSAS evidence | PM | Optional | No | No | Probably text-only |
| Anonymised flow diagrams | PM flow showcase | Proof of mapping | No | Yes, anonymised **[Confirmed]** | Remove product name, accommodation details |
| HemoTracker diagram | PM (optional) | Concept | No | No | Label “concept” |
| Naderkela test cases / sheets / tool screenshots | QA | Evidence | No | Yes, redacted **[Confirmed]** | Redact patient data, URLs, tokens |
| NuloAfrica test cases / sheet / API evidence | QA | Evidence | No | Yes, redacted **[Confirmed]** | Redact; defect evidence only if safe |
| SwiftEntry screenshots / link | SwiftEntry | Evidence | No | No | Verify link still valid |
| SwiftEntry before/after workflow | SwiftEntry | Optional | No | No | Only if accurate |
| Reference recordings | Motion design | Match feel | No | n/a | 10–20 s each |

Nothing is marked as available unless I have the file. Saved so far: portrait and illustration draft.

---

## 5. Visitor journey and where the CTAs sit

1. **Hero** — portrait, name, title, intro. **Explore my work** (scrolls to the selector), **Work with me** (scrolls to Contact), small **Download CV** link. A slim top bar also holds Work with me.
2. **About** — short; no CTA needed.
3. **Tagline + two cards** — choose Product Management or QA.
4. **Chosen chapter** — projects open as cards. Close/Skip always visible. Ends with “Back to the two paths” / “Explore the other one”.
5. **Other chapter** — same pattern.
6. **SwiftEntry** — “When a feature works, but the workflow doesn't”. Guide character points on to contact.
7. **Freelance** — short list; **Work with me** button.
8. **Contact** — email, LinkedIn.
9. **Footer** — links and Download CV.

A visitor can reach contact or the CV from the top bar at any time, so no one has to finish the story first.

---

## 6. Missing items

### Real blockers
**Before building starts**
- Your approval of the brief, and the builder/platform choice (§3).
- A decision on the illustration: keep the bob or redraw with braids.

**Before the matching stage can be finished with real content**
- Venstoc: permission to publish and the user figures (69 users), plus a clear problem statement and launch outcome.
- SwiftEntry: your approval of the narrative.

**Before launch (placeholders are fine during the build)**
- Email, LinkedIn URL, CV file.
- Redacted evidence for Naderkela and NuloAfrica; anonymised flow screenshots.
- Confirmation of the NuloAfrica numbers (140+, 14 areas, high-priority defect).
- Domain and hosting.
- Permission/restrictions check for NEMSAS, Venstoc, SwiftEntry.

### Optional improvements
- Phone number; HemoTracker concept; sound; extra illustration poses.
- Reference recordings (helpful, but I can design the motion without them; they'd tune it).
- SwiftEntry before/after visual and public URL.
- Copyright line.

---

## 7. Problems I found in the existing files (please decide)

1. **SwiftEntry location conflicts.** Master doc §3/§4.7 and your instructions put SwiftEntry in its own chapter after both disciplines. Prompt 3 puts it inside Product Management. *Recommended: remove it from Prompt 3; Prompt 5 handles it.*
2. **A client name is in the public-facing copy.** Master doc §4.4–4.5 names the designer “Shizu” and says the work should stay anonymised. *Recommended: public copy says “a product designer”. Keep the name as an internal note only.*
3. **Venstoc figures** (69 users, 62/7 split) are baked into Prompt 3 although the master doc says permission to publish is pending. *Recommended: Prompt 3 should say “use only after Ifeoma confirms”.*
4. **Placeholders now out of date.** Prompts 1–2 say to use placeholders for the portrait. The portrait now exists. The illustration is still a draft.
5. **NuloAfrica wording.** Your latest brief says “subject to verification”; the master doc says naming is approved. I read both as: naming approved, numbers to double-check.
6. **NEMSAS category.** Master doc lists it under PM and under “PM or QA”. *Recommended: PM only, as it's coordination work.*
7. **Prompt 2** says “Download CV when supplied”; the hero button should still show a disabled/“coming soon” state so layout is right. Minor.

---

## 8. Approval checklist (reply with answers or “approved as proposed”)
- [ ] Brief and project split approved
- [ ] Palette and font suggestions approved
- [x] Illustration: keep as is
- [x] Builder: custom-coded here
- [ ] Answers to the 8 CV questions in "Update 2"
- [ ] Skip sound at launch
- [ ] Fixes 1–7 in §7 accepted
- [ ] HemoTracker in or out
- [ ] NEMSAS in or out

**Build status: not started. I'll wait for your go-ahead.**
