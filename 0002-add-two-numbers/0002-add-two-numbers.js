function addTwoNumbers(l1, l2) {
  // Dummy node
  let dummyHead = { val: 0, next: null };
  let p = l1, q = l2, current = dummyHead;
  let carry = 0;

  // Process each node
  while (p !== null || q !== null) {
    let x = p !== null ? p.val : 0;
    let y = q !== null ? q.val : 0;

    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = { val: sum % 10, next: null };
    current = current.next;

    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  // If there's a carry left, add it as a new node
  if (carry > 0) {
    current.next = { val: carry, next: null };
  }

  // Return the result list starting from the node after the dummy node
  return dummyHead.next;
}
