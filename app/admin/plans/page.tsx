import { PlansManager } from "@/components/admin/plans-manager"

export default function AdminPlansPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Plans</h1>
      <PlansManager />
    </div>
  )
}
