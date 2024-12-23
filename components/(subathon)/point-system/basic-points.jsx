'use client'
import {Table, TableBody, TableCell, TableRow} from '@/components/ui/table'

export function BasicPoints() {
  return (
    <div>
      <h3 className='mb-3 text-lg font-semibold'>Basic Points</h3>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>1 bit</TableCell>
            <TableCell className='text-right font-semibold'>1 point</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>$1 tip</TableCell>
            <TableCell className='text-right font-semibold'>100 points</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Prime Sub</TableCell>
            <TableCell className='text-right font-semibold'>400 points</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
