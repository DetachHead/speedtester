FROM hayd/alpine-deno:1.9.1
COPY . .
ENTRYPOINT deno run --allow-net main.ts
