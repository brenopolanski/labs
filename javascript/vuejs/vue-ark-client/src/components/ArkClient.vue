<template>
  <div>
    <h1>Ark Client</h1>
    <button @click.prevent="btnClickClient">Ark Client</button>
    <button @click.prevent="btnClickCrypto">Ark Crypto</button>
  </div>
</template>

<script>
//import { Connection } from "@arkecosystem/client";
import { Connection } from "@arkecosystem/client";
import { Identities } from "@arkecosystem/crypto";
// import { Connection } from "../dist";

export default {
  name: "ArkClient",
  methods: {
    btnClickClient() {
      /* eslint no-console: 0 */
      const init = async () => {
        const connection = new Connection("https://api.ark.io/api");
        //const response = await connection.api("wallets").all();
        const response = await connection.api("wallets").top();
        //const response = await connection
        //  .api("wallets")
        //  .transactions("D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax");
        /*
        const response = await connection
          .api("wallets")
          .get(
            "021d03bace0687a1a5e797f884b13fb46f817ec32de1374a7f223f24404401d220"
          );
          */
        if (response && response.status === 200) {
          console.log(response.body);
        }
      };

      init();
    },
    btnClickCrypto() {
      /* eslint no-console: 0 */
      // Throughout this document, the keys object used is:
      const keys = Identities.Keys.fromPassphrase(
        "chuckle scare march ceiling play security modify drink bulb wrong grant evolve pitch endorse speak"
      );

      // Throughout this document, the recipientId variable used is:
      const recipientId = Identities.Address.fromPassphrase(
        "chuckle scare march ceiling play security modify drink bulb wrong grant evolve pitch endorse speak"
      );

      // Throughout this document, the senderPublicKey variable used is:
      const senderPublicKey = Identities.PublicKey.fromPassphrase(
        "chuckle scare march ceiling play security modify drink bulb wrong grant evolve pitch endorse speak"
      );

      console.log("keys", keys);
      console.log("recipientId", recipientId);
      console.log("senderPublicKey", senderPublicKey);
    }
  }
};
</script>
