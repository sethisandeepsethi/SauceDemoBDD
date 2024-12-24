module.exports = {
    default: {
        tags: process.env.npm_config_tags || "",
        paths: ["src/test/features/*.*"],
        require: [
            "src/test/steps/*.ts",
            "src/test/hooks/hooks.ts",
        ],
        requireModule: ["ts-node/register"],
        formatOptions: {
            snippetInterface: "async-await"
        },
        format: [
            "progress-bar",
            "html:test-results/reports/cucumber-reports.html",
            "json:test-results/reports/cucumber-reports.json",
            "rerun:@rerun.txt"
        ],
        parallel: 3,
        retry: 0,
        dryRun: false,
    },
    rerun: {
        require: [
            "src/test/steps/*.ts",
            "src/test/hooks/hooks.ts"
        ],
        requireModule: ["ts-node/register"],
        formatOptions: {
            snippetInterface: "async-await"
        },
        format: [
            "html:test-results/reports/cucumber-reports.html",
            "json:test-results/reports/cucumber-reports.json",
            "rerun:@rerun.txt"
        ],
        parallel: 2
    }
}
