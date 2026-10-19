import * as assert from "assert";
import * as vscode from "vscode";

suite("Quick Runner Extension Tests", () => {
    test("Commands are registered", async () => {
        const commands = await vscode.commands.getCommands(true);
        assert.ok(commands.includes("quickrunner.run"));
        assert.ok(commands.includes("quickrunner.stop"));
        assert.ok(commands.includes("quickrunner.runCustomCommand"));
        assert.ok(commands.includes("quickrunner.runByLanguage"));
    });
});
