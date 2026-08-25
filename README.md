# Archstone Consulting Engineers — Website

A static site (HTML/CSS/JS, no build step) built from your logo and brochure.

## Files
- `index.html` — all page content
- `styles.css` — design system
- `script.js` — services/projects data + interactions
- `assets/` — your logo and project photos

## 1. Preview it locally
Just double-click `index.html`, or run a tiny local server from this folder:
```
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## 2. Host it free on GitHub Pages first
1. Create a free GitHub account at github.com if you don't have one.
2. Create a new repository, e.g. `archstone-website` (Public).
3. Upload every file in this folder (keep the `assets` folder structure intact) — either drag-and-drop on github.com, or via git:
   ```
   git init
   git add .
   git commit -m "Launch site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/archstone-website.git
   git push -u origin main
   ```
4. In the repo, go to **Settings → Pages**, set **Branch: main**, folder `/root`, and save.
5. GitHub gives you a live URL like `https://<your-username>.github.io/archstone-website/` within a minute or two.

This costs nothing and is a good way to test the site and share it with your team before buying a domain.

## 3. Move to a real domain (archstoneconsultingengineers.com or similar)
Once you're happy with it, you have two easy paths:

**Path A — keep hosting on GitHub Pages, just point your domain at it (cheapest).**
Buy a domain anywhere (Hostinger, GoDaddy, or a registrar-only service like Namecheap/Cloudflare), then add a `CNAME` file pointing to your domain and update the domain's DNS to GitHub's IPs. GitHub's own guide: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

**Path B — move hosting to Hostinger or GoDaddy** and upload these same files via their file manager or FTP.

### Hostinger vs GoDaddy, in short
- **Price:** Hostinger is consistently cheaper, both on introductory and renewal pricing — often around half of GoDaddy's comparable plan.
- **Performance:** Independent tests generally show Hostinger with faster response times and marginally higher uptime.
- **Support:** GoDaddy offers 24/7 phone support on every plan, which Hostinger doesn't provide at any tier — worth it if you want to call a human.
- **Domains:** GoDaddy is the world's largest domain registrar with the widest range of domain extensions (TLDs), so it's a strong choice if you specifically want to buy the domain there.
- **All-in-one:** GoDaddy bundles hosting + email + marketing tools more tightly if you want one bill and one dashboard.

For a simple company site like this one, Hostinger's cheapest shared hosting plan is enough, and is the better value. If phone support matters more to you than price, GoDaddy is a reasonable choice too. Note: hosting pricing and plans change often, so check current rates directly on hostinger.com and godaddy.com before buying.

## Contact form — already wired up, one activation step needed
The form sends submissions straight to **archstoneconsultingengineers@gmail.com** using [FormSubmit.co](https://formsubmit.co), a free service that needs no signup, account, or API key — the site just posts to `https://formsubmit.co/ajax/archstoneconsultingengineers@gmail.com` (see `FORM_ENDPOINT` in `script.js`).

**One-time activation:** the very first time anyone submits the form (once the site is live), FormSubmit sends a confirmation email to archstoneconsultingengineers@gmail.com with a link you must click to activate delivery. Every submission after that lands directly in the inbox — no further steps. Until it's clicked, that first submission's data itself is *not* lost — FormSubmit holds it and resends it on activation, but check the "Sent" prompt to be safe:
1. Open the live site and submit the form once yourself as a test.
2. Check archstoneconsultingengineers@gmail.com (and spam folder) for an email from FormSubmit and click **Activate Form**.
3. Submit the test form again to confirm you receive it properly.

**Notes / limits:**
- Free tier allows up to 50 submissions/month. If you outgrow that, FormSubmit has paid tiers, or switch to Formspree (formspree.io) — same pattern, different endpoint.
- To send to a *different* inbox later, just change the email address in `FORM_ENDPOINT` in `script.js` and re-activate.
- There's a hidden honeypot field (`_honey`) already in the form to cut down spam bots.

## Other notes before going fully live
- Swap in a real domain email (e.g. `info@archstoneconsultingengineers.com`) once you have the domain — most hosts include free email accounts. You can then also point `FORM_ENDPOINT` at that inbox instead.
- Consider adding a Google Business Profile for the Jogeshwari office so you show up in local search results.
