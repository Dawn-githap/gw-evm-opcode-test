const {ethers} = require("hardhat");
const {expect} = require("chai");


describe("Pre Cross Compile Cotract  ", function () {

    let contract;
    let blockInfoContract;
    beforeEach(async function () {
        blockInfoContract = await ethers.getContractFactory("CallContractTest");
        contract = await blockInfoContract.deploy();
        await contract.deployed();
        console.log("address",contract.address)

    });

    // it("Pre Cross Compile Cotract ", async () => {
    //
    //     await testCallFunc("0x0000000000000000000000000000000000000001","0x38d18acb67d25c8bb9942764b62f18e17054f66a817bd4295423adf9ed98873e000000000000000000000000000000000000000000000000000000000000001b38d18acb67d25c8bb9942764b62f18e17054f66a817bd4295423adf9ed98873e789d1dd423d25f0772d2748d60f7e4b81bb14d086eba8e8e8efb6dcff8a4ae02","0x000000000000000000000000ceaccac640adf55b2028469bd36ba501f28b699d")
    //     await testCallFunc("0x0000000000000000000000000000000000000002","0x38d18acb67d25c8bb9942764b62f18e17054f66a817bd4295423adf9ed98873e000000000000000000000000000000000000000000000000000000000000001b38d18acb67d25c8bb9942764b62f18e17054f66a817bd4295423adf9ed98873e789d1dd423d25f0772d2748d60f7e4b81bb14d086eba8e8e8efb6dcff8a4ae02","0x811c7003375852fabd0d362e40e68607a12bdabae61a7d068fe5fdd1dbbf2a5d")
    //     await testCallFunc("0x0000000000000000000000000000000000000003","0x38d18acb67d25c8bb9942764b62f18e17054f66a817bd4295423adf9ed98873e000000000000000000000000000000000000000000000000000000000000001b38d18acb67d25c8bb9942764b62f18e17054f66a817bd4295423adf9ed98873e789d1dd423d25f0772d2748d60f7e4b81bb14d086eba8e8e8efb6dcff8a4ae02","0x0000000000000000000000009215b8d9882ff46f0dfde6684d78e831467f65e6")
    //     await testCallFunc("0x0000000000000000000000000000000000000004","0x38d18acb000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000036161610000000000000000000000000000000000000000000000000000000000","0x38d18acb000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000036161610000000000000000000000000000000000000000000000000000000000")
    //     await testCallFunc("0x0000000000000000000000000000000000000005","0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002003fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2efffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f","0x0000000000000000000000000000000000000000000000000000000000000001")
    //     await testCallFunc("0x0000000000000000000000000000000000000006","0x18b18acfb4c2c30276db5411368e7185b311dd124691610c5d3b74034e093dc9063c909c4720840cb5134cb9f59fa749755796819658d32efc0d288198f3726607c2b7f58a84bd6145f00c9c2bc0bb1a187f20ff2c92963a88019e7c6a014eed06614e20c147e940f2d70da3f74c9a17df361706a4485c742bd6788478fa17d7","0x2243525c5efd4b9c3d3c45ac0ca3fe4dd85e830a4ce6b65fa1eeaee202839703301d1d33be6da8e509df21cc35964723180eed7532537db9ae5e7d48f195c915")
    //     await testCallFunc("0x0000000000000000000000000000000000000007","0x2bd3e6d0f3b142924f5ca7b49ce5b9d54c4703d7ae5648e61d02268b1a0a9fb721611ce0a6af85915e2f1d70300909ce2e49dfad4a4619c8390cae66cefdb20400000000000000000000000000000000000000000000000011138ce750fa15c2","0x070a8d6a982153cae4be29d434e8faef8a47b274a053f5a4ee2a6c9c13c31e5c031b8ce914eba3a9ffb989f9cdd5b0f01943074bf4f0f315690ec3cec6981afc")
    //     // //todo wait fix
    // })

    it("bug",async ()=>{
        // try {
        //     await testCallFunc("0x0000000000000000000000000000000000000001","0x38d18acb67d25c8bb9942764b62f18e17054f66a817bd4295423adf9ed98873e000000000000000000000000000000000000000000000000000000000000001b38d18acb67d25c8bb9942764b62f18e17054f66a817bd4295423adf9ed98873e789d1dd423d25f0772d2748d60f7e4b81bb14d086eba8e8e8efb6dcff8a4ae02","0x000000000000000000000000ceaccac640adf55b2028469bd36ba501f28b6991")
        // }catch (e) {
        //     expect(e.toString()).to.be.contains("            ά");
        // }

    });
    it("wait todo",async ()=>{
        let result = await testCallFunc("0x0000000000000000000000000000000000000008","0x1c76476f4def4bb94541d57ebba1193381ffa7aa76ada664dd31c16024c43f593034dd2920f673e204fee2811c678745fc819b55d3e9d294e45c9b03a76aef41209dd15ebff5d46c4bd888e51a93cf99a7329636c63514396b4a452003a35bf704bf11ca01483bfa8b34b43561848d28905960114c8ac04049af4b6315a416782bb8324af6cfc93537a2ad1a445cfd0ca2a71acd7ac41fadbf933c2a51be344d120a2a4cf30c1bf9845f20c6fe39e07ea2cce61f0c9bb048165fe5e4de877550111e129f1cf1097710d41c4ac70fcdfa5ba2023c6ff1cbeac322de49d1b6df7c2032c61a830e3c17286de9462bf242fca2883585b93870a73853face6a6bf411198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c21800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa","0x0000000000000000000000000000000000000000000000000000000000000001")
        console.log(result)

    })

    async function testCallFunc(contractAddress,payload,expectedResult) {
        console.log("test - contract:",contractAddress)
        let ret = await contract.testCall(contractAddress,ethers.utils.arrayify(payload),ethers.utils.arrayify(expectedResult));
        console.log(ret)
        let receipt = await ret.wait();
        expect(receipt.status).to.be.equal(1);
    }


});