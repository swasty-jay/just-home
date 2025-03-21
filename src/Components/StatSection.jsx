import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StatSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 bg-white">
      {/* Left Side - Text Content */}
      <motion.div
        className="lg:w-1/2 space-y-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-lg md:text-xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We Use Real Estate to Show Our Appreciation of The World
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We connect buyers and sellers with the best real estate deals,
          ensuring secure transactions and valuable investments.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold">
              $<CountUp end={18} duration={3} />M
            </h3>
            <p className="text-gray-500 text-sm">
              Owned From Properties Transactions
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold">
              <CountUp end={15000} duration={3} />+
            </h3>
            <p className="text-gray-500 text-sm">Properties For Sell</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-xl font-bold">
              <CountUp end={26000} duration={3} />+
            </h3>
            <p className="text-gray-500 text-sm">Properties For Buy</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-xl font-bold">
              <CountUp end={890} duration={3} />
            </h3>
            <p className="text-gray-500 text-sm">
              Daily Completed Transactions
            </p>
          </motion.div>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Link to="/about">
            <button className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition">
              Learn More →
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="lg:w-1/2 mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://yujyiileosrvbcoddbzt.supabase.co/storage/v1/object/public/images//home-4856369_1280.jpg"
          alt="Modern House"
          className="rounded-lg shadow-lg w-full"
        />
      </motion.div>
    </section>
  );
};

export default StatSection;
