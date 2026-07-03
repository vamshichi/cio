"use client";

import { useState } from "react";
import PaymentCard from "./PaymentCard";

interface Props {
  open: boolean;
  onClose: () => void;
  formData: {
    fullName: string;
    jobTitle: string;
    company: string;
    email: string;
    phone: string;
    linkedin: string;
    objectives: string;
    meeting: string;
    requirements: string;
  };
}

export default function PaymentSuccessModal({
  open,
  onClose,
  formData,
}: Props) {
  const [showPayment, setShowPayment] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!open) return null;

  const handlePayLater = async () => {
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("fullName", formData.fullName);
      fd.append("jobTitle", formData.jobTitle);
      fd.append("company", formData.company);
      fd.append("email", formData.email);
      fd.append("phone", formData.phone);
      fd.append("linkedin", formData.linkedin);
      fd.append("objectives", formData.objectives);
      fd.append("meeting", formData.meeting);
      fd.append("requirements", formData.requirements);
      fd.append("paymentStatus", "pending");

      const res = await fetch("/api/vendor-registration", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to submit registration. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-5">
        {!showPayment ? (
          <div className="w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700 p-8">
            <div className="text-center">
              <div className="text-6xl mb-5">🎉</div>
              <h2 className="text-3xl font-bold text-white">
                Registration Successful
              </h2>
              <p className="mt-4 text-slate-300">
                Thank you for registering.
              </p>
              <p className="text-slate-400 mt-2">
                Would you like to complete the payment now?
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => setShowPayment(true)}
                className="flex-1 rounded-xl bg-cyan-500 py-3 font-semibold text-slate-900 hover:bg-cyan-400"
              >
                Pay Now
              </button>

              <button
                onClick={handlePayLater}
                disabled={submitting}
                className="flex-1 rounded-xl border border-slate-600 py-3 text-white hover:bg-slate-800 disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Pay Later"}
              </button>
            </div>
          </div>
        ) : (
          <PaymentCard onClose={onClose} formData={formData} />
        )}
      </div>
    </>
  );
}