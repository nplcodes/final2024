import React from 'react'

export default function SingleStaffReport() {
  return (
    <div>
<div class="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
  <h1 class="text-2xl font-semibold mb-4">Logistics Report</h1>

  <div class="grid grid-cols-2 gap-4">
    <div class="border p-4 rounded">
      <h2 class="text-lg font-semibold mb-2">Closed Issues</h2>
      <div class="flex flex-col space-y-2">
        <div class="flex justify-between">
          <span class="text-gray-600">Issue 1:</span>
          <span class="text-green-600">10</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-600">Issue 2:</span>
          <span class="text-green-600">5</span>
        </div>
      </div>
    </div>

    <div class="border p-4 rounded">
      <h2 class="text-lg font-semibold mb-2">Open Issues</h2>
      <div class="flex flex-col space-y-2">
        <div class="flex justify-between">
          <span class="text-gray-600">Issue 3:</span>
          <span class="text-red-600">8</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-600">Issue 4:</span>
          <span class="text-red-600">12</span>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8 border-t pt-4">
    <h2 class="text-lg font-semibold mb-2">Total Issues</h2>
    <div class="flex flex-col space-y-2">
      <div class="flex justify-between">
        <span class="text-gray-600">Combined Total:</span>
        <span class="text-blue-600">35</span>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
