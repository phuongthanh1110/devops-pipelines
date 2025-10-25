console.log("Starting tests...");

// Simple test example
function runTests() {
  let testsPassed = 0;
  let testsFailed = 0;

  // Test 1: Check if Node.js is running
  try {
    console.log("✓ Test 1: Node.js is running");
    testsPassed++;
  } catch (error) {
    console.log("✗ Test 1 failed:", error.message);
    testsFailed++;
  }

  // Test 2: Simple math operation
  try {
    const result = 2 + 2;
    if (result === 4) {
      console.log("✓ Test 2: Math operation works correctly");
      testsPassed++;
    } else {
      throw new Error("Expected 4, got " + result);
    }
  } catch (error) {
    console.log("✗ Test 2 failed:", error.message);
    testsFailed++;
  }

  // Test 3: String operation
  try {
    const greeting = "Hello";
    if (greeting.length === 5) {
      console.log("✓ Test 3: String operation works correctly");
      testsPassed++;
    } else {
      throw new Error("Expected length 5, got " + greeting.length);
    }
  } catch (error) {
    console.log("✗ Test 3 failed:", error.message);
    testsFailed++;
  }

  console.log("\nTest Summary:");
  console.log(`Passed: ${testsPassed}`);
  console.log(`Failed: ${testsFailed}`);
  console.log("Ending tests...");

  // Exit with error code if any tests failed
  if (testsFailed > 0) {
    process.exit(1);
  }
  
  process.exit(0);
}

runTests();
