# Node PeerJS

[![npm version](https://badge.fury.io/js/peerjs-on-node.svg)](https://badge.fury.io/js/peerjs-on-node)

A port of the [PeerJS library](https://github.com/peers/peerjs) which currently only works on browsers. It uses the `wrtc` node module to provide webrtc functionality and fixes various compatibility issues with NodeJS.

## Install

```
npm i --save @kevledev/peerjs-on-node
```

## Usage

Just refer to the PeerJS documentation for a more detailed description of how the module works. You can also take a look at the `examples/` directory in this repo to see a small example using `peerjs-on-node`
- Import the module like this

    ```
    import { Peer } from 'peerjs-on-node'
    ```

## Build history

#### v1.0.0

- Based on commit [c073252](https://github.com/peers/peerjs/commit/c073252f879b57757f8a82d40302bbe06a3890e0) of PeerJS
- First release version based on original peerjs-on-node
- See file `patch/base_code_changes.diff` for all the modification made to the base PeerJS code and get it running on NodeJS
