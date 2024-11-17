---
title: Kubuntu 24.04 Bluetooth
description: Bluetooth Service and Issues
---

## Description

{{ description }}

Kubuntu 24.04 LTS has totes open bluetooth issues.  Use proprietary dongle until issues are resolved.

[My Issue](https://www.reddit.com/r/Ubuntu/comments/1cf30qo/comment/l7tjl8p/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)

## Ubuntu Core Bluetooth IFs

Ref: [Ubuntu Core Docs](https://ubuntu.com/core/docs/bluez/introduction/bluetooth-on-ubuntu-core)

## BlueZ

- The official Linux BT stack.
- Provides support for the core BT layers and protocols.

### BlueZ Modules

- Bluetooth kernel subsystem core
- L2CAP and SCO audio kernel layers
- RFCOMM, BNEP, CMTP and HIDP kernel implementations
- HCI UART, USB, PCMCIA and virtual device drivers
- General Bluetooth and SDP libraries and daemons
- Configuration and testing utilities
- Protocol decoding and analysis tools

## Two BT-related IFs on Ubuntu Core

- Bluetooth on Ubuntu Core is provided by the BlueZ stack.
- bluetooth-control - The lower level comes with the kernel snap
- bluez IF - The user-space portion can be installed in a separate snap.

### Bluez IF

- The bluez IF is not installed by the core snap, neither the gadget nor kernel. It shall be installed by the application snap
- The plug is the client.
- The slot provides access to the bluez (Bluetooth) service.
- Connecting the two allows a client to access devices registered by the bluez service through the slot.
- Example: An app with a bluez plug could connect to the system's bluez slot to access a BT game controller.

### bluetooth-control IF

- The bluetooth-control IF is installed by the core snap.
- Accesses BT hw directly
- bluetooth-control allows managing the kernel BT stack

### IF Mgmt

SNAPa plug (consumes) -> IF -> SNAPb slot (provides)

- A slot can support multiple plug connections.

```bash
snap connections|grep blue
```
Output:

| IF | PLUG (client) | SLOT |
|---|---|---|
| bluetooth-control | bluetooth-autostart:bluetooth-control  | - | 
| mount-observe  | bluetooth-autostart:mount-observe | - |   
| network | bluetooth-autostart:network | :network |
| network-bind | bluetooth-autostart:network-bind  | :network-bind |
| network-observe | bluetooth-autostart:network-observe | - |
| system-observe | bluetooth-autostart:system-observe | - | 

- bluetooth-control SLOT is provided by the core snap
- bluez - no snap exists which provides a slot based on the bluez IF.  You need an application snap to reveal it.