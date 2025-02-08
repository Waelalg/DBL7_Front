"use client"

import { useState } from "react"
import { ProfileSection } from "@/components/parameters/profile-section"
import { RoleSection } from "@/components/parameters/role-section"
import { ParameterSection } from "@/components/parameters/parameter-section"
import { ParametersNav } from "@/components/parameters/parameters-nav"
import { SecuritySection } from "@/components/parameters/security-section"
import type { UserProfile } from "@/types/user"
import type { Parameter } from "@/types/parameters"

// Mock user data
const mockUser: UserProfile = {
  name: "John Doe",
  avatar: "/placeholder.svg?height=100&width=100",
  role: "manager",
  department: "Engineering",
}

// Mock parameters data
const mockParameters: Parameter[] = [
  {
    id: "theme",
    label: "Theme",
    type: "select",
    value: "light",
    options: [
      { label: "Light", value: "light" },
      { label: "Dark", value: "dark" },
      { label: "System", value: "system" },
    ],
  },
  {
    id: "notifications",
    label: "Email Notifications",
    type: "toggle",
    value: true,
  },
]

export default function Parameters() {
  const [user, setUser] = useState<UserProfile>(mockUser)
  const [parameters, setParameters] = useState<Parameter[]>(mockParameters)
  const [currentSection, setCurrentSection] = useState("account")

  const handleUserUpdate = async (data: Partial<UserProfile>) => {
    setUser((prevUser) => ({ ...prevUser, ...data }))
    // Here you would typically call an API to update the user data
  }

  const handleParameterChange = (parameterId: string, value: any) => {
    setParameters((prevParams) => prevParams.map((param) => (param.id === parameterId ? { ...param, value } : param)))
    // Here you would typically call an API to update the parameter
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64">
          <ParametersNav currentSection={currentSection} onSectionChange={setCurrentSection} />
        </aside>
        <main className="flex-1 space-y-6">
          {currentSection === "account" && (
            <>
              <ProfileSection user={user} onUpdate={handleUserUpdate} />
              <RoleSection currentRole={user.role} department={user.department} onUpdate={handleUserUpdate} />
            </>
          )}
          {currentSection === "appearance" && (
            <ParameterSection
              title="Appearance"
              description="Customize the look and feel of the application"
              parameters={parameters.filter((p) => p.id === "theme")}
              onParameterChange={handleParameterChange}
            />
          )}
          {currentSection === "notifications" && (
            <ParameterSection
              title="Notifications"
              description="Manage your notification preferences"
              parameters={parameters.filter((p) => p.id === "notifications")}
              onParameterChange={handleParameterChange}
            />
          )}
          {currentSection === "security" && <SecuritySection />}
          {/* Add more sections as needed */}
        </main>
      </div>
    </div>
  )
}

