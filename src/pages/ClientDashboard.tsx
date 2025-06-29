@@ .. @@
         <div className="mb-8">
           <h1 className="text-3xl font-bold text-gray-900">Client Dashboard</h1>
-          <p className="text-gray-600 mt-2">Find and hire the best AI talent for your projects</p>
+          <p className="text-gray-600 mt-2">Find and hire the best Filipino AI talent for your projects</p>
         </div>

@@ .. @@
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Find AI Talent</h2>
                  
                   {!subscription.active && (
                     <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                       <div className="flex items-start space-x-3">
                         <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                           <Crown className="h-5 w-5 text-blue-600" />
                         </div>
                         <div className="flex-1">
                           <h3 className="font-semibold text-blue-900 mb-1">Upgrade to Premium</h3>
                           <p className="text-blue-800 text-sm mb-3">
-                            Get unlimited access to freelancer contact details and advanced search filters.
+                            Get unlimited access to Filipino AI specialist contact details and advanced search filters.
                           </p>
                           <button
                             onClick={handleUpgrade}
                             className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                           >
                             Upgrade Now - $99/month
                           </button>
                         </div>
                       </div>
                     </div>
                   )}

@@ .. @@
                     <div className="border border-gray-200 rounded-lg p-4">
                       <h3 className="font-semibold text-gray-900 mb-2">Quick Search</h3>
                       <div className="flex flex-col sm:flex-row gap-3">
                         <input
                           type="text"
-                          placeholder="Search skills, names, or keywords..."
+                          placeholder="Search Filipino AI experts by skills or names..."
                           className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                         />
                         <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                           Search
                         </button>
                       </div>
                     </div>

@@ .. @@
                       <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                         <h4 className="font-medium text-gray-900 mb-1">Prompt Engineering</h4>
-                        <p className="text-sm text-gray-600 mb-2">87 verified experts</p>
+                        <p className="text-sm text-gray-600 mb-2">127 Filipino experts</p>
                         <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                           Browse →
                         </button>
                       </div>

                       <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                         <h4 className="font-medium text-gray-900 mb-1">LangChain Development</h4>
-                        <p className="text-sm text-gray-600 mb-2">45 verified experts</p>
+                        <p className="text-sm text-gray-600 mb-2">78 Filipino experts</p>
                         <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                           Browse →
                         </button>
                       </div>

                       <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                         <h4 className="font-medium text-gray-900 mb-1">Chatbot Development</h4>
-                        <p className="text-sm text-gray-600 mb-2">62 verified experts</p>
+                        <p className="text-sm text-gray-600 mb-2">95 Filipino experts</p>
                         <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                           Browse →
                         </button>
                       </div>