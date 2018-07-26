import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";
// import AppBtc from "@ledgerhq/hw-app-btc";

async function example() {
  TransportNodeHid.setListenDevicesDebug(true);
  TransportNodeHid.setListenDevicesPollingSkip(() => Math.random() >= 0.5);

  // const listen =
  TransportNodeHid.listen({
    next: async e => {
      console.log("[exemple] Event received:", e.type, e.device.product);

      // if (e.type === "add") {
      //   const transport = await TransportNodeHid.open(e.descriptor);
      //   const appBtc = new AppBtc(transport);

      //   appBtc.getWalletPublicKey("44'/0'/0'/0").then(o => {
      //     console.log("getWalletPublicKey:", o);

      //     listen.stop();
      //   });
      // }
    },
    complete: () => {
      console.log("complete");
    },
    error: err => {
      console.error(err);
    }
  });
}

example();
