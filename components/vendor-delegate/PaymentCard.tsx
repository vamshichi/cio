"use client";

import { useState } from "react";

interface PaymentCardProps {
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

export default function PaymentCard({
  onClose,
  formData,
}: PaymentCardProps) {
  const [transactionId, setTransactionId] = useState("");
  const [proof, setProof] = useState<File | null>(null);

  

 const handleSubmit = async () => {
  if (!transactionId.trim() && !proof) {
    alert("Please enter the Transaction ID or upload the payment screenshot.");
    return;
  }

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

    fd.append("transactionId", transactionId);
    fd.append("paymentStatus", "paid");

    if (proof) {
      fd.append("proof", proof);
    }

    const res = await fetch("/api/vendor-registration", {
      method: "POST",
      body: fd,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Something went wrong.");
    }

    alert("Registration submitted successfully!");

    onClose();
  } catch (error) {
    console.error(error);
    alert("Failed to submit registration.");
  }
};

  return (
    <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700 p-5 sm:p-6 lg:p-8">

      <h2 className="text-3xl font-bold text-white text-center">
        Complete Your Payment
      </h2>

      <p className="text-slate-400 text-center mt-2">
        Scan the QR Code or use the bank details below.
      </p>

      <div className="grid md:grid-cols-1 gap-10 mt-10">

        {/* Left Side */}

        <div>

          <div className="bg-white rounded-2xl flex justify-center">
            <img
              src="/payment/qr.png"
              alt="QR Code"
              className="w-134 h-80 object-contain"
            />
          </div>

          <p className="text-center text-slate-400 mt-4">
            Scan & Pay
          </p>

        </div>

        {/* Right Side */}

        <div>

          {/* <div className="rounded-2xl bg-slate-800 p-6 space-y-4">

            <h3 className="text-xl font-semibold text-white">
              Bank Details
            </h3>

            <div className="text-slate-300 space-y-2">

              <p>
                <strong>Account Name:</strong> Confex Meet
              </p>

              <p>
                <strong>Bank:</strong> HDFC Bank
              </p>

              <p>
                <strong>Account Number:</strong> 123456789012
              </p>

              <p>
                <strong>IFSC:</strong> HDFC0001234
              </p>

              <p>
                <strong>Branch:</strong> Bengaluru
              </p>

              <p className="text-cyan-400 font-semibold mt-4">
                Amount: ₹25,000 + GST
              </p>

            </div>

          </div> */}

          {/* Transaction */}

          <div className="mt-8">
            <div className="mb-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
  <p className="text-sm text-cyan-300">
    Please provide <strong>either</strong> your Transaction ID <strong>or</strong> upload the payment screenshot. Both are not required.
  </p>
</div>

            <label className="block text-sm text-slate-300 mb-2">
  Transaction ID <span className="text-slate-500">(Optional)</span>
</label>

            <input
              type="text"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter UPI / Bank Transaction ID"
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white outline-none focus:border-cyan-500"
            />

          </div>

          {/* Upload */}

          <div className="mt-6">

            <label className="block text-sm text-slate-300 mb-2">
  Payment Screenshot <span className="text-slate-500">(Optional)</span>
</label>

            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) =>
                setProof(e.target.files?.[0] || null)
              }
              className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white"
            />

          </div>

          {/* Buttons */}

          <div className="flex gap-4 mt-8">

            <button
              onClick={handleSubmit}
              className="flex-1 rounded-xl bg-cyan-500 py-3 font-semibold text-slate-900 hover:bg-cyan-400 transition"
            >
              Submit Payment
            </button>

            <button
              onClick={onClose}
              className="flex-1 rounded-xl border border-slate-600 py-3 text-white hover:bg-slate-800 transition"
            >
              Close
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}