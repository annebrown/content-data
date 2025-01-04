---
title: Perl -vs- Go
description: Notes on Perl & Go
---





- 

1. - 

    - Easy communication between Electron UI and the low-level keyboard simulation components.

    - Allows test and verification of the the keyboard simulation independently from the Electron UI.

    Compile (Cross-Platform)

    - **Strengths:** Go's cross-compilation capabilities are ideal for reaching a wide variety of platforms.
    - **Suitability:** This is a solid long-term strategy.

2. **Electron (UI):**

    - 
    - **Strengths:** Electron will provide a powerful UI, while letting you focus on learning it.
    - **Suitability:** Great to make an interface.

3. **Communicate (IPC):**

    - 
    - **Strengths:** HTTP, WebSockets, Named Pipes, and other IPC techniques are good options for communicating between different processes.
    - **Suitability:** These methods can be introduced as you become more comfortable with the process.
    - **Recommendation:** Start with the simplest method for this project, and you can explore the others later.

4. **KISS (Keep It Simple):**

    - 
    - **Strengths:** Starting with a minimal viable product (MVP) is essential to ensure you get something working as soon as possible.
    - **Suitability:** This is a great approach to learning, and will make it so that you do not get bogged down.
    - **Recommendation:** A simple action like showing a message, will be enough to start.

5. **Interface First:**

    - 
    - **Strengths:** Getting the UI working before moving on to lower level components allows you to get feedback, and to feel a sense of accomplishment.
    - **Suitability:** This is a great idea, and will make you more excited about the process.
    - **Recommendation:** This is a great idea. Lets get the UI to do something simple first.

**Your Proposed Plan - Perfect**

Your plan to:

1. 
2. **Decide on a Simple Action:** Get the UI working and doing something.
3. **Choose a Language (Go):** Write the keyboard simulation in Go, while exploring perl if it is fun.
4. **Call the Code From the Electron App:** Use a simple method to call the Go code from Electron.

This order of operations is excellent, and will allow you to move forward while creating something that is testable and understandable.

**Recommendation: Lets Go!**

I think this is an excellent plan. I'm particularly excited about your language choices, and your desire to experiment. It's a recipe for a great learning experience.

**Next Steps**

Given this plan, let's get to it!

1. 
2. **Simple Action:** Let's set up the Electron UI to display a simple message when a button is clicked.
3. **Start with Go:** Let's write a very simple "hello world" program that will be invoked from our electron UI.

Are you ready to start working on the UI?