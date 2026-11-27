---
# Guard file. The real site is built by Astro in .github/workflows/deploy.yml.
# If GitHub Pages is still set to "Deploy from a branch", its Jekyll build would
# publish this repository's README over the real site. The unknown Liquid tag
# below makes that legacy build fail on purpose, so it never deploys.
# Astro ignores this file. Delete it once Settings → Pages → Source is "GitHub Actions".
---
{% legacy_jekyll_build_disabled %}
