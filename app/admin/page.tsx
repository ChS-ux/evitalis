import Image from "next/image";
import Link from "next/link";

import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Panel administratora</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Witaj 👋</h1>
          <p className="text-dark-700">
            Zarządzaj wizytami, pacjentami i personelem medycznym w jednym miejscu.
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Zaplanowane wizyty"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Oczekujące wizyty"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Anulowane wizyty"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;
