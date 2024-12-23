'use client'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'

export function SubscriptionPoints() {
  return (
    <div className='space-y-3'>
      <h3 className='text-lg font-semibold'>Subscription Points</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Base</TableHead>
            <TableHead>3 Month</TableHead>
            <TableHead>6 Month</TableHead>
            <TableHead>12 Month</TableHead>
            <TableHead>Gift Bonus</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Tier 1</TableCell>
            <TableCell>600</TableCell>
            <TableCell>+300</TableCell>
            <TableCell>+700</TableCell>
            <TableCell>+1,500</TableCell>
            <TableCell>+100</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tier 2</TableCell>
            <TableCell>1,000</TableCell>
            <TableCell>+600</TableCell>
            <TableCell>+1,400</TableCell>
            <TableCell>+3,000</TableCell>
            <TableCell>+200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tier 3</TableCell>
            <TableCell>2,500</TableCell>
            <TableCell>+1,500</TableCell>
            <TableCell>+3,500</TableCell>
            <TableCell>+7,500</TableCell>
            <TableCell>+500</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
