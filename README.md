# TypeScript Dictionary Utilities

I am tired writing this utility in every project.

## Features

- Generic dictionary interface supporting any value type
- Core utility functions:
  - `clone`: Create shallow copies of dictionaries
  - `equal`: Compare dictionaries for equality
  - `isSubset`: Check if one dictionary is contained within another
  - `merge`: Combine multiple dictionaries into one

## Installation
```bash
npm i @galihrivanto@dict
```

## Usage
```typescript
import { Dictionary, clone, equal, isSubset, merge } from '@galihrivanto/dict';
// Create some sample dictionaries
const dict1: Dictionary<number> = { a: 1, b: 2 };

const dict2: Dictionary<number> = { c: 3, d: 4 };

// Clone a dictionary
const copied = clone(dict1); // { a: 1, b: 2 }

// Check equality
const areEqual = equal(dict1, copied); // true

// Check subset
const subset = { a: 1 };
const isContained = isSubset(subset, dict1); // true

// Merge dictionaries
const merged = merge(dict1, dict2); // { a: 1, b: 2, c: 3, d: 4 }
```