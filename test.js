require("dotenv/config");

function test(expectedSecret) {
  const secretMatches = process.env.MEANING_OF_LIFE == expectedSecret;

  console.log(`The Secret does${secretMatches ? "" : " not"} match`);
  return secretMatches;
}

test(22);
