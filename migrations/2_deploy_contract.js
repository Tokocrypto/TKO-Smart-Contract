const TKOContract = artifacts.require("TKOToken");

module.exports = function (deployer) {
  deployer.deploy(TKOContract);
};
