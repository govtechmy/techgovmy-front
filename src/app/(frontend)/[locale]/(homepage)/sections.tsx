export const StatisticsSection = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4.5">
        <p className="text-txt-govtech-600 tracking-[0.2em] font-semibold uppercase">Statistik</p>
        <h2 className="font-heading text-heading-sm font-semibold">
          Masa Depan Digital Malaysia, Selangkah Kehadapan
        </h2>
        <p className="text-txt-black-500 text-body-md">
          Seiring dengan perkembangan kami, orang ramai boleh mengikuti kemajuan yang membentuk
          transformasi digital kami.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex flex-col gap-3 lg:w-[247.5px]">
          <p className="text-heading-lg text-txt-govtech-600">1</p>
          <p className="text-txt-black-500 text-body-md font-medium">Projek Dilancarkan</p>
        </div>
        <div className="flex flex-col gap-3 lg:w-[247.5px]">
          <p className="text-heading-lg text-txt-govtech-600">9</p>
          <p className="text-txt-black-500 text-body-md font-medium"> Projek Dalam Pembangunan</p>
        </div>
        <div className="flex flex-col gap-3 lg:w-[247.5px]">
          <p className="text-heading-lg text-txt-govtech-600">15</p>
          <p className="text-txt-black-500 text-body-md font-medium">Ahli Pasukan</p>
        </div>
      </div>
    </div>
  );
};
