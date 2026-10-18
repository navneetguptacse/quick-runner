import * as assert from "assert";
import * as vscode from "vscode";

suite("Quick Runner Extension Tests", () => {
    test("Commands are registered", async () => {
        const commands = await vscode.commands.getCommands(true);
        assert.ok(commands.includes("quick-runner.run"));
        assert.ok(commands.includes("quick-runner.stop"));
        assert.ok(commands.includes("quick-runner.runCustomCommand"));
        assert.ok(commands.includes("quick-runner.runByLanguage"));
    });
});