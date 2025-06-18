import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";

const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician
  );

  return (
    <div className=" flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="sukces"
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Twoja <span className="text-green-500">prośba o wizytę</span> została
            pomyślnie wysłana!
          </h2>
          <p>Wkrótce się z Tobą skontaktujemy w celu potwierdzenia.</p>
        </section>

        <section className="request-details">
          <p>Szczegóły zgłoszonej wizyty: </p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              alt="lekarz"
              width={100}
              height={100}
              className="size-6"
            />
            <p className="whitespace-nowrap">Dr {doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="kalendarz"
            />
            <p> {formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>

        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            Nowa wizyta
          </Link>
        </Button>

        <p className="copyright">© 2025 eVitalis</p>
      </div>
    </div>
  );
};

export default RequestSuccess;
