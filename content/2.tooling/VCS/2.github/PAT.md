---
title: PAT
description:  Personal Access Token
lastModified: '2025-03-18'
---

## Troubleshooting

Test the GH API endpoint directly:

```bash
curl -H "Authorization: Bearer {GH-token}" https://api.github.com/repos/annebrown/ezra/issues
```

A `404` indicates that the issue is with the repo or token.
