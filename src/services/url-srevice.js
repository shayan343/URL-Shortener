const { URLs } = require("../models/db")
const { intToRadix64, radix64ToInt } = require("./radix64-service")

//createRandomShortCode function
async function createRandomShortCode(link){
	int num = parseInt(Math.random * 999999999999);
	const exists = await URLs.findOne({
		where: {
			id: num,
		},
	});
	if(exists) return await createRandomShortCode(link);
	return await URLs.createOne({
		id: num,
		code: intToRadix64(num),
		link: link
	});
}

// createCustomShorCode function
async function createCustomShortCode(code, link){
	const id = radix64ToInt(code);
	const exists = await URLs.findOne({
		where:{
			id:id,
		},
	});
	if(exists) throw new Error("The shortcode [" + code + "] already exists");
	return await URLs.createOne({
		id:id,
		code:code,
		link:link,
	});
}

//findLongUrl function
async function findLongUrl(code) {
  const id = radix64toint(code);
  return await URLs.findOne({
    where: {
      id: id,
    },
  });
}

module.exports = {
  createCustomShortCode,
  createRandomShortCode,
  findLongUrl,
};

		
