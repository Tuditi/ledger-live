export const BOT_APP_ID = 198164;
export const GATE_CHECK_RUN_NAME = "The Balrog has been summoned ❤️‍🔥";
export enum RUNNERS {
  internal,
  external,
  both,
}
export const WORKFLOWS = {
  "build-desktop.yml": {
    runsOn: RUNNERS.internal,
    affected: ["ledger-live-desktop"],
    checkRunName: "[Desktop] Build the app",
    summaryFile: "summary.json",
    getInputs: (payload: any) => {
      return {
        sha: payload.workflow_run.head_sha,
        ref: payload.workflow_run.head_branch,
      };
    },
  },
  "build-desktop-external.yml": {
    runsOn: RUNNERS.external,
    affected: ["ledger-live-desktop"],
    checkRunName: "[Desktop] Build the app (external)",
    summaryFile: "",
    getInputs: (payload: any) => {
      return {
        sha: payload.workflow_run.head_sha,
        ref: payload.workflow_run.head_branch,
      };
    },
  },
  "test-desktop.yml": {
    runsOn: RUNNERS.internal,
    affected: ["ledger-live-desktop"],
    checkRunName: "[Desktop] Run e2e and unit tests",
    summaryFile: "summary.json",
    getInputs: (payload: any) => {
      return {
        sha: payload.workflow_run.head_sha,
        ref: payload.workflow_run.head_branch,
      };
    },
  },
  "test-desktop-external.yml": {
    runsOn: RUNNERS.external,
    affected: ["ledger-live-desktop"],
    checkRunName: "[Desktop] Run e2e and unit tests (external)",
    summaryFile: "",
    getInputs: (payload: any) => {
      return {
        sha: payload.workflow_run.head_sha,
        ref: payload.workflow_run.head_branch,
      };
    },
  },
  "build-mobile.yml": {
    runsOn: RUNNERS.internal,
    affected: ["live-mobile"],
    checkRunName: "[Mobile] Build the app",
    summaryFile: "",
    getInputs: (payload: any) => {
      return {
        sha: payload.workflow_run.head_sha,
        ref: payload.workflow_run.head_branch,
      };
    },
  },
  "build-mobile-external.yml": {
    runsOn: RUNNERS.external,
    affected: ["live-mobile"],
    checkRunName: "[Mobile] Build the app (external)",
    summaryFile: "",
    getInputs: (payload: any) => {
      return {
        sha: payload.workflow_run.head_sha,
        ref: payload.workflow_run.head_branch,
      };
    },
  },
  "test-mobile.yml": {
    runsOn: RUNNERS.both,
    affected: ["live-mobile"],
    checkRunName: "[Mobile] Run tests",
    summaryFile: "",
    getInputs: (payload: any) => {
      return {
        sha: payload.workflow_run.head_sha,
        ref: payload.workflow_run.head_branch,
      };
    },
  },
  "test.yml": {
    runsOn: RUNNERS.both,
    affected: [
      "@ledgerhq/live-common",
      "@ledgerhq/cryptoassets",
      "@ledgerhq/devices",
      "@ledgerhq/errors",
      "@ledgerhq/hw-app-algorand",
      "@ledgerhq/hw-app-btc",
      "@ledgerhq/hw-app-cosmos",
      "@ledgerhq/hw-app-eth",
      "@ledgerhq/hw-app-helium",
      "@ledgerhq/hw-app-polkadot",
      "@ledgerhq/hw-app-solana",
      "@ledgerhq/hw-app-str",
      "@ledgerhq/hw-app-tezos",
      "@ledgerhq/hw-app-trx",
      "@ledgerhq/hw-app-xrp",
      "@ledgerhq/hw-transport",
      "@ledgerhq/hw-transport-http",
      "@ledgerhq/hw-transport-mocker",
      "@ledgerhq/hw-transport-node-ble",
      "@ledgerhq/hw-transport-node-hid",
      "@ledgerhq/hw-transport-node-hid-noevents",
      "@ledgerhq/hw-transport-node-hid-singleton",
      "@ledgerhq/hw-transport-node-speculos",
      "@ledgerhq/hw-transport-node-speculos-http",
      "@ledgerhq/hw-transport-web-ble",
      "@ledgerhq/hw-transport-webhid",
      "@ledgerhq/hw-transport-webusb",
      "@ledgerhq/logs",
      "@ledgerhq/react-native-hid",
      "@ledgerhq/react-native-hw-transport-ble",
      "@ledgerhq/types-cryptoassets",
      "@ledgerhq/types-devices",
      "@ledgerhq/types-live",
      "@ledgerhq/crypto-icons-ui",
      "@ledgerhq/icons-ui",
      "@ledgerhq/native-ui",
      "@ledgerhq/react-ui",
      "@ledgerhq/ui-shared",
    ],
    checkRunName: "[Libraries] Run tests",
    summaryFile: "",
    getInputs: (payload: any) => {
      return {
        sha: payload.workflow_run.head_sha,
        ref: payload.workflow_run.head_branch,
        since_branch:
          payload.workflow_run.pull_requests[0]?.base.ref || "develop",
      };
    },
  },
};
