## My Daily AWS Study [Simple Blog Engine To Render Markdown Notes]

[Notes URL](http://aws-study.shams-nahid.com/)

These are the notes I took during my AWS CSAA exam preparation.

I was trying to find a easy way to render these `markdown` notes in a easy navigation ways.

Since medium is not compatible for this nested `markdown` format and could not find a suitable one, made this simple blog engine.

### Run the APP

**Parser**

- Clone the repo
- Go to root directory and install dependencies

```bash
yarn
```

- Now run the blog parser by

```bash
yarn dev
```

This will parse the content and made them available in `/tree` endpoint.

**UI**

- Go to `/ui`
- Install dependencies

```bash
yarn
```

- Now run the `ui` by

```bash
yarn start
```

This will load the `UI` in `http://localhost:3000`
