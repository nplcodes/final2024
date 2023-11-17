import { useSelector } from "react-redux/es/hooks/useSelector"

export default function SingleStaffReport() {
  const assignedToMe = useSelector((state)=> state.issue.assignedToMe);
  const studentIssues = useSelector((state)=> state.issue.studentIssues);

  const assignedToMeCount = assignedToMe? assignedToMe.length: 0;

  // closed issues
  const filteredClosedIssues = assignedToMe.filter((issue) => issue.status === 'closed');
  const filteredClosedIssuesCount = filteredClosedIssues? filteredClosedIssues.length: 0;

    // open issues
    const filteredOpenIssues = assignedToMe.filter((issue) => issue.status === 'assigned');
    const filteredOpenIssuesCount = filteredOpenIssues? filteredOpenIssues.length: 0;
  

  return (
<div class="container mx-auto mt-8 p-8 bg-white rounded-lg shadow-md">
  <h1 class="text-2xl font-semibold mb-4">{assignedToMe[0]? assignedToMe[0].category+""+"Report" : 'No issues yet'}</h1>

  <div class="grid grid-cols-2 gap-4">
    <div class="border p-4 rounded">
      <h2 class="text-lg font-semibold mb-2">Closed Issues</h2>
      <div class="flex flex-col space-y-2">
        <div class="flex justify-between">
          <span class="text-gray-600">Done:</span>
          <span class="text-green-600">{filteredClosedIssuesCount}</span>
        </div>
      </div>
    </div>

    <div class="border p-4 rounded">
      <h2 class="text-lg font-semibold mb-2">Open Issues</h2>
      <div class="flex flex-col space-y-2">
        <div class="flex justify-between">
          <span class="text-gray-600">Progress:</span>
          <span class="text-red-600">{filteredOpenIssuesCount}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8 border-t pt-4">
    <h2 class="text-lg font-semibold mb-2">Total Issues</h2>
    <div class="flex flex-col space-y-2">
      <div class="flex justify-between">
        <span class="text-gray-600">Combined Total:</span>
        <span class="text-blue-600">{assignedToMeCount}</span>
      </div>
    </div>
  </div>
</div>

  )
}
