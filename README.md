# Any Jack in a Box?

A small interactive browser toy that reveals a randomly selected “Jack” when the box is opened.

**HTML · CSS · JavaScript**

[Getting started](#getting-started) · [Repository guide](#repository-guide) · [Checks](#checks-and-review) · [Credits](#credits-and-reuse)

## What you can explore

- Click the box to reveal a name or phrase.
- Close or reset the box for another try.
- An About page and illustrated presentation.

## Getting started

Requires a browser and a local HTTP server. Python 3 provides one without installing application packages.

```bash
git clone https://github.com/SamOBrienOlinger/jack-in-a-box.git
cd jack-in-a-box
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [localhost:8000](http://localhost:8000). Serve the repository over HTTP so module imports, relative assets and page links resolve correctly.

## Repository guide

| Path | Purpose |
| --- | --- |
| [index.html](index.html) | Primary browser entry point |
| [assets/](assets/) | Project styles, scripts, data and imagery |

## Checks and review

No automated application test command is configured in this snapshot.

For a manual review, follow the main user journey, check keyboard navigation and narrow-screen layouts, and inspect the browser console for missing assets or failed requests.

## Credits and reuse

No repository-level licence file is present in this snapshot. This README does not grant additional reuse permissions. Check with the relevant rights holders before reusing code, written content or assets.

## Support

Repository maintained in [Sam O’Brien-Olinger’s GitHub account](https://github.com/SamOBrienOlinger). For a problem or suggested improvement, [open an issue](https://github.com/SamOBrienOlinger/jack-in-a-box/issues) with the affected page or command, steps to reproduce, and expected behaviour.

[Back to top](#any-jack-in-a-box)
