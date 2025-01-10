import Image from "next/image";

const content = [
  {
    title: "Product",
    list: ["Overview", "Features", "Solutions", "Tutorials", "Releases"],
    new: [false, false, true, false, false],
  },
  {
    title: "Company",
    list: ["About us", "Careers", "News", "Contact"],
    new: [false, false, false, false],
  },
  {
    title: "Resources",
    list: ["Newsletter", "Help centre", "Tutorials", "Support"],
    new: [false, false, false, false],
  },
  {
    title: "Social",
    list: ["Twitter", "LinkedIn", "Facebook"],
    new: [false, false, false],
  },
  {
    title: "Legal",
    list: ["Terms", "Privacy", "Cookies", "Licenses", "Settings"],
    new: [false, false, false, false, false],
  },
];

export default function Footer() {
  return (
    <footer className="">
      <div className="flex gap-[64px] px-8 pt-[64px] pb-[48px] w-[1280px] mx-auto">
        <div className="w-[320px]">
          <div>
            <Image
              src={"/SATBuddy.png"}
              width={188}
              height={58}
              alt="logo"></Image>
            <div className="mt-8 text-base tetx-gray-600">
              Don’t let the SAT overwhelm you! Join now to get a free diagnostic
              test and start building your effective study plan.
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          {content.map((each) => {
            return (
              <div key={each.title} className="w-[140px]">
                <div className="mb-4 text-sm font-semibold text-gray-500">
                  {each.title}
                </div>
                <div className="flex flex-col gap-3 text-base text-gray-600 font-semibold">
                  {each.list.map((e, i) => {
                    return (
                      <div key={e}>
                        {e}{" "}
                        {each.new[i] ? (
                          <span className="inline-block py-0.5 px-2 text-green-700 bg-green-50 rounded-2xl text-[12px]">
                            New
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-12 flex justify-between w-full">
        <div>© 2077 SATBuddy. All rights reserved.</div>
        <div>
          <Image
            src={"./footer-logo-icon.svg"}
            width={264}
            height={24}
            alt="icon"></Image>
        </div>
      </div>
    </footer>
  );
}
