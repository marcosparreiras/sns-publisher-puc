# Simple HTTP Service to Post NFE Urls to a AWS SNS Topic

Build with NodeJs, Typescript and Fastify

## How to run

1. Clone the repository:

```bash
git clone https://github.com/marcosparreiras/sns-publisher-puc.git
```

2. Install the dependencies:

```bash
cd ./sns-publisher-puc && npm install
```

3. Rename the `.env.sample` file to `.env` and fill in the required information.

4. Execute de app in development mode with:

```bash
npm run dev

curl -s -X POST -H "Content-Type: application/json" -d '{"url": "[URL-HERE]"}' http://localhost:3333/nfe # to post a nfe url
```

Or test the application with:

```bash
npm run test
```
