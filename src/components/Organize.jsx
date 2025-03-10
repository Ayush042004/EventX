import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import { Particles } from "./magicui/particles"; // Ensure this path is correct

const Organize = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="relative bg-gray-100 flex items-center justify-center overflow-hidden min-h-screen px-4">
      {/* Particles Background */}
      <div className="fixed w-full h-full inset-0">
        <Particles
          quantity={100}
          staticity={30}
          ease={50}
          size={2}
          refresh={false}
          color={"#0A0A08"}
          vx={0.5}
          vy={0.5}
        />
      </div>

      <div className="relative max-w-4xl w-full mx-auto py-7 px-6 sm:px-8 lg:px-10 bg-white shadow-lg rounded-lg border border-yellow-400">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
        </div>

        {/* Form */}
        <div className="relative">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Organize an Event</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Event Banner */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Banner</label>
              <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <label className="cursor-pointer text-blue-600 font-medium hover:text-blue-500">
                    <span>Click here to upload</span>
                    <input type="file" className="sr-only" {...register("banner", { required: true })} />
                  </label>
                  <p className="text-xs text-gray-500">Max size of image cannot exceed 1MB!</p>
                </div>
              </div>
              {errors.banner && <p className="mt-2 text-sm text-red-600">Banner is required</p>}
            </div>

            {/* Other Form Fields */}
            {[
              "id",
              "description",
              "finalDate",
              "prizePool",
              "maxTeamSize",
              "roundTotal",
              "roundAt",
            ].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type={field === "finalDate" ? "date" : "text"}
                  {...register(field, { required: true })}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
                {errors[field] && (
                  <p className="mt-2 text-sm text-red-600">
                    {field.replace(/([A-Z])/g, " $1")} is required
                  </p>
                )}
              </div>
            ))}

            {/* Is Vote Active */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Is Vote Active?</label>
              <select
                {...register("isVoteActive", { required: true })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {errors.isVoteActive && (
                <p className="mt-2 text-sm text-red-600">Vote status is required</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 shadow-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Organize;
