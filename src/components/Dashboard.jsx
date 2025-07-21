import React from 'react';
import { BarChart3, Users, Shield, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      icon: Users,
      label: "Registered Farms",
      value: "12,847",
      change: "+234 this week",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      label: "Alerts Sent",
      value: "3,421",
      change: "+89 today",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      label: "Accuracy Rate",
      value: "94.7%",
      change: "+2.1% this month",
      color: "text-purple-600"
    },
    {
      icon: BarChart3,
      label: "Crops Saved",
      value: "₹8.2 Cr",
      change: "Total value protected",
      color: "text-orange-600"
    }
  ];

  const riskDistribution = [
    { state: "Odisha", farms: 2847, highRisk: 12, mediumRisk: 28, lowRisk: 60 },
    { state: "West Bengal", farms: 3241, highRisk: 8, mediumRisk: 22, lowRisk: 70 },
    { state: "Tamil Nadu", farms: 1892, highRisk: 15, mediumRisk: 31, lowRisk: 54 },
    { state: "Karnataka", farms: 1567, highRisk: 6, mediumRisk: 24, lowRisk: 70 },
    { state: "Andhra Pradesh", farms: 1843, highRisk: 18, mediumRisk: 29, lowRisk: 53 }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Live Dashboard
          </h2>
          <p className="text-lg text-gray-600">
            Real-time monitoring and insights for agricultural officers and researchers
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm font-medium text-gray-700">{stat.label}</p>
                  <p className="text-xs text-gray-500">{stat.change}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Risk Distribution Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600">
            <h3 className="text-xl font-bold text-white">State-wise Risk Distribution</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    State
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Farms
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    High Risk (%)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medium Risk (%)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Low Risk (%)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {riskDistribution.map((state, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {state.state}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {state.farms.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-12 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-red-600 h-2 rounded-full"
                            style={{ width: `${state.highRisk}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500">{state.highRisk}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-12 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-yellow-500 h-2 rounded-full"
                            style={{ width: `${state.mediumRisk}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500">{state.mediumRisk}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-12 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${state.lowRisk}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500">{state.lowRisk}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA for Officers */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Agricultural Officer Access
            </h3>
            <p className="text-gray-600 mb-6">
              Get detailed analytics, manage farmer registrations, and access advanced prediction models
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Request Admin Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
