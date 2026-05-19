import AdminShell from "@/app/admin/AdminShell";
import MediaGrid from "@/components/MediaGrid";

export default function AdminMediaPage() {
  return (
    <AdminShell title="Media library">
      {/* TODO: Connect upload, image metadata, and storage provider integration. */}
      <MediaGrid />
    </AdminShell>
  );
}
