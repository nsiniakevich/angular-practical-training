2.1 

Create any directive with isolated scope (tab control with callbacks on activating new tab) which will use `ng-transclude`

Tab control should have not limited number of possible tabs inside.

It should have callback `onTabActivated` so that each tab could load data only in case it's needed (lazy loading for each tab)

2.2 

Cover the tab control from previous task with tests which demonstrate that callback are called when tab is activated