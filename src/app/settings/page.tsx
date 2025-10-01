"use client";
import Header from "@/components/Header/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSettings } from "@/context/SettingsContext";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type SettingsFormData = {
  jiraAssigneeId: string;
  githubUsername: string;
  email: string;
};

export default function SettingsPage() {
  const { settings, updateSettings } = useSettings();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<SettingsFormData>({
    defaultValues: settings,
  });

  const onSubmit = (data: SettingsFormData) => {
    try {
      updateSettings(data);
      toast.success("Settings saved successfully!");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (_e) {
      toast.error("Failed to save settings. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="m-10 ">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="mt-2 text-gray-600">Manage your preferences here.</p>
      </div>
      <div className="flex-grow flex mx-10 ">
        <div>
          <div className="min-w-150 max-w-6xl bg-white shadow-xl border border-gray-200 rounded-2xl">
            <div className="p-6 space-y-4">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <p className="text-sm text-[#767D8C]">Email</p>
                  <Input
                    placeholder={settings?.email || ""}
                    {...register("email", { required: true })}
                    className={errors.email ? "border border-destructive" : ""}
                  />
                  {errors.email && (
                    <span className="text-destructive text-xs">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm text-[#767D8C]">Github Username</p>
                  <Input
                    placeholder={settings?.githubUsername || ""}
                    {...register("githubUsername", { required: true })}
                    className={
                      errors.githubUsername ? "border border-destructive" : ""
                    }
                  />
                  {errors.githubUsername && (
                    <span className="text-destructive text-xs">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm text-[#767D8C]">Jira User ID</p>
                  <Input
                    placeholder={settings?.jiraAssigneeId || ""}
                    {...register("jiraAssigneeId", { required: true })}
                    className={
                      errors.jiraAssigneeId ? "border border-destructive" : ""
                    }
                  />
                  {errors.email && (
                    <span className="text-destructive text-xs">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="flex justify-end">
                  <Button type="submit" disabled={!isDirty}>
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
