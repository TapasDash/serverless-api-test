module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Hello From Tapas update!", event }),
  };
};
//If you want to deploy only single function inset of whole stack:
// sls deploy function -f hello
