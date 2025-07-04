import * as path from 'path';

import { defineConfig, devices } from '@playwright/test';

import { defineCoverageReporterConfig } from '@bgotink/playwright-coverage';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['monocart-reporter', {
        name: "My Test Report",
        outputFile: './monocart-report/index.html',
        // global coverage report options
        coverage: {
            entryFilter: (entry: any) => true,
            sourceFilter: (sourcePath: any) => sourcePath.search(/src\/.+/) !== -1,
        }
    }]
  ],
  // reporter: [
  //   ['list'],
  //   [
  //     '@bgotink/playwright-coverage',
  //     defineCoverageReporterConfig({
  //       /* Path to the root files should be resolved from, most likely your repository root */
  //       sourceRoot: __dirname,
  //       /* Files to ignore in coverage, useful
  //          - if you're testing the demo app of a component library and want to exclude the demo sources
  //          - or part of the code is generated
  //          - or if you're running into any of the other many reasons people have for excluding files */
  //       exclude: ['path/to/ignored/code/**'],
  //       /* Directory in which to write coverage reports */
  //       resultDir: path.join(__dirname, 'results/e2e-coverage'),
  //       /* Configure the reports to generate.
  //          The value is an array of istanbul reports, with optional configuration attached. */
  //       reports: [
  //         /* Create an HTML view at <resultDir>/index.html */
  //         ['html'],
  //         /* Create <resultDir>/coverage.lcov for consumption by tooling */
  //         [
  //           'lcovonly',
  //           {
  //             file: 'coverage.lcov',
  //           },
  //         ],
  //         /* Log a coverage summary at the end of the test run */
  //         [
  //           'text-summary',
  //           {
  //             file: null,
  //           },
  //         ],
  //       ],
  //       /* Configure watermarks, see https://github.com/istanbuljs/nyc#high-and-low-watermarks */
  //       // watermarks: {},
  //     }),
  //   ],
  // ],
  use: {
    baseURL: 'http://localhost:4200',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'ng serve',
    url: 'http://localhost:4200',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
