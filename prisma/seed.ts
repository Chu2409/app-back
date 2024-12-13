// seed.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create Users
  const user1 = await prisma.user.create({
    data: {
      email: 'john.doe@example.com',
      password: 'password123',
    },
  })

  const user2 = await prisma.user.create({
    data: {
      email: 'jane.smith@example.com',
      password: 'securepass',
    },
  })

  const user3 = await prisma.user.create({
    data: {
      email: 'test@gmail.com',
      password: '123123123',
    },
  })

  // Create Semesters
  const semester1 = await prisma.semester.create({
    data: {
      name: 'Fall 2024',
    },
  })

  const semester2 = await prisma.semester.create({
    data: {
      name: 'Spring 2025',
    },
  })

  // Create Subjects
  const subject1 = await prisma.subject.create({
    data: {
      name: 'Mathematics',
      professor: 'Dr. Alan Turing',
      credits: 4,
      status: 'Active',
      semesterId: semester1.id,
    },
  })

  const subject2 = await prisma.subject.create({
    data: {
      name: 'Physics',
      professor: 'Dr. Marie Curie',
      credits: 3,
      status: 'Active',
      semesterId: semester2.id,
    },
  })

  // Create Schedules
  await prisma.schedule.create({
    data: {
      day: 'Monday',
      time: '09:00 AM',
      subjectId: subject1.id,
    },
  })

  await prisma.schedule.create({
    data: {
      day: 'Wednesday',
      time: '02:00 PM',
      subjectId: subject2.id,
    },
  })

  // Create Enrollments
  await prisma.enrollment.create({
    data: {
      finalGrade: 85.5,
      studentId: user1.id,
      subjectId: subject1.id,
    },
  })

  await prisma.enrollment.create({
    data: {
      finalGrade: 92.0,
      studentId: user2.id,
      subjectId: subject2.id,
    },
  })

  // Create Assignments
  const assignment1 = await prisma.assignment.create({
    data: {
      title: 'Calculus Homework',
      description: 'Complete exercises 1-10 from chapter 3.',
      dueDate: new Date('2024-12-15T23:59:59Z'),
      status: 'Pending',
      subjectId: subject1.id,
    },
  })

  // Create Resources
  await prisma.resource.create({
    data: {
      name: 'Lecture Notes',
      type: 'PDF',
      url: 'https://example.com/notes.pdf',
      assignmentId: assignment1.id,
    },
  })

  console.log('Data seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
