# Online Vision Calculator

## How to edit

You must have access to the repository with editing rights. Contact Carla Bates <cbates@umn.edu> if you need help gaining access.

To edit a file directly on Github, just navigate to it and click the pencil in the top right corner of the file contents. Once you are happy with your edit you can commit it directly to the `main` branch.

*Advanced:* If you are familiar with `git` you can clone the repository and make edits on your own machine. Any updates to `main` will be built automatically on Github.

Either way, the new changes will begin to be built automatically and should finish within a few minutes.

## What to edit
All content which is supposed to be easily editable is in the `content` directory.

- *Home* and *Background* pages:
  - Edit the `content/index-content.mdx` or `content/background-content.mdx`
- Calculator page question/prompt text
  - *Coming soon*
- Typical display table
  - Edit `content/typical-display-measures.ts`. This file contains 3 parts. The top true/false variable shows/hides the table. The second part is a list of the column names. You can change the display names of the columns there if you like. The last part is a list of all the options. Change the row contents here.
- Central vision loss options, viewing distances, fonts and their values, unit labels
  - Edit `content/options-definitions.tsx`
- Validation limits (for Snellen and logMar values)
  - Edit `content/limits.tsx`
