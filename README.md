# Synchronous Employee Manager

This code does not use `async...await` syntax. Most of the prompts will accept a callback function, so that you can pass in the `mainPrompt()` function, which eliminates the needs for a circular import but does thrust you into callback hell.
