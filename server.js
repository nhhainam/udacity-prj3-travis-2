const FAVORITE_INSTRUCTOR = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const favoriteFood = FAVORITE_INSTRUCTOR;
  console.log(`My favorite food is ${favoriteFood}`);
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
