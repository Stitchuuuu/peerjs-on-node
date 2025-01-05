import wrtc from '@roamhq/wrtc'
const RTCSessionDescription = wrtc.RTCSessionDescription
const RTCIceCandidate = wrtc.RTCIceCandidate
const RTCPeerConnection = wrtc.RTCPeerConnection

import fetch from 'node-fetch'
import WebSocket from 'ws'
import FileReader from 'filereader'
import Blob from 'node-blob'
import blobToArraybuffer from 'blob-to-arraybuffer'

Blob.prototype.arrayBuffer = function() {
    return blobToArraybuffer(this);
}
