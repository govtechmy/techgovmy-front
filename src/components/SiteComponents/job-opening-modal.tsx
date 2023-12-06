import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Button from "@components/Button";
import { useTranslation } from "@lib/hooks/useTranslation";
import { Fragment, FunctionComponent } from "react";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { clx } from "@/lib/helper";
import { header, body } from "@/lib/configs/fonts";
import { JobOpening } from "@/resources/job-opening";
import { BenefitIcons } from "@/resources/benefits";

type JobOpeningModalProps = {
  show: boolean;
  hide: () => void;
  data: JobOpening;
  loading: boolean;
};

export const JobOpeningModal: FunctionComponent<JobOpeningModalProps> = ({
  show,
  hide,
  data,
  loading,
}) => {
  const { t, i18n } = useTranslation(["join-us"]);
  return (
    <>
      {data && (
        <Transition show={show} as={Fragment}>
          <Dialog
            as="div"
            className={clx("relative z-30", body.variable, header.variable, "font-sans")}
            onClose={() => {
              hide();
            }}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center text-center py-6">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel
                    className={
                      "border-outline dark:border-washed-dark shadow-floating dark:border-outlineHover-dark w-full max-w-[800px] transform overflow-hidden rounded-lg border bg-white p-4 md:p-8 text-left align-middle transition-all dark:bg-black"
                    }
                  >
                    <Dialog.Title
                      as="div"
                      className="border-outline flex-col-reverse sm:flex-row flex items-start text-black dark:text-white"
                    >
                      <div className="flex flex-1 flex-col gap-2">
                        <h4 className={clx("font-semibold")}>{data.job_details.title}</h4>
                        <p className="text-orange dark:text-orange text-sm font-medium">
                          {data.job_details.section}
                        </p>
                      </div>
                      <Button
                        variant="reset"
                        className="hover:bg-washed dark:hover:bg-washed-dark h-6 w-6 rounded-full self-end sm:self-auto"
                        onClick={() => {
                          hide();
                        }}
                      >
                        <XMarkIcon className="text-dim mx-auto h-6 w-6 group-hover:text-black group-hover:dark:text-white" />
                      </Button>
                    </Dialog.Title>

                    <div className="my-6 flex flex-col gap-3">
                      <div className="flex flex-row items-center flex-wrap gap-3">
                        {data.job_details.perks.map((item, index) => (
                          <div key={index} className="flex items-center gap-3 w-[300px]">
                            {BenefitIcons[item.icon]}
                            <p className="text-outline-hover-dark dark:text-dim text-sm">
                              {item.title}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Job Description section */}
                    <div className="p-3 min-h-[500px] max-h-[500px] w-full overflow-scroll bg-background dark:bg-washed-dark/50 rounded-lg border dark:border-washed-dark border-outline">
                      <p>{data.job_details.job_description}</p>
                      <p>{data.job_details.skills}</p>
                    </div>

                    <div className="mt-6 rounded-lg border border-[#EFAE75] bg-[#FFF6EF] p-3 flex items-center gap-3">
                      <EnvelopeIcon className="w-6 h-6 text-orange" />
                      <p className="job-detail-apply text-sm font-medium text-outline-hover-dark dark:text-outline-hover-dark">
                        {t("modal.to_apply")}
                      </p>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};
