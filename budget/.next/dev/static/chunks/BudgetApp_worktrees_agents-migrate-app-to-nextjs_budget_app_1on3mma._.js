(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddExpenses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function AddExpenses({ expenses, onAddExpense, categories, onCategoryAdd }) {
    _s();
    const [expenseName, setExpenseName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [nameError, setNameError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [amountError, setAmountError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showCategoryInput, setShowCategoryInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newCategory, setNewCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleCategoryChange = (e)=>{
        if (e.target.value === "addCategory") {
            setShowCategoryInput(true);
            setCategory("");
        } else {
            setShowCategoryInput(false);
            setCategory(e.target.value);
        }
    };
    const handleAddCategory = ()=>{
        if (newCategory && onCategoryAdd) {
            onCategoryAdd([
                ...categories,
                newCategory
            ]);
            setCategory(newCategory);
            setNewCategory("");
            setShowCategoryInput(false);
        }
    };
    const handleAddExpense = (e)=>{
        e.preventDefault();
        // Validate inputs
        if (expenseName === "") {
            setNameError("Please enter an expense name.");
            return;
        }
        if (amount <= 0) {
            setAmountError("Please enter a valid amount.");
            return;
        }
        // Call the onAddExpense function passed from the parent component
        onAddExpense([
            ...expenses,
            {
                expenseName: expenseName,
                amount: amount,
                category: category || undefined
            }
        ]);
        // Clear the input fields
        setExpenseName("");
        setAmount(0);
        setCategory("");
        setNameError("");
        setAmountError("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "add-expense-form",
        onSubmit: handleAddExpense,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            className: `form-input ${nameError ? 'error' : ''}`,
                            placeholder: "Add Expense",
                            value: expenseName,
                            onChange: (e)=>{
                                setExpenseName(e.target.value);
                                setNameError("");
                            }
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        nameError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            className: "error-message",
                            children: nameError
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                            lineNumber: 83,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            className: `form-input ${amountError ? 'error' : ''}`,
                            placeholder: "Amount",
                            value: amount || '',
                            onChange: (e)=>{
                                setAmount(Number(e.target.value));
                                setAmountError("");
                            }
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        amountError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            className: "error-message",
                            children: amountError
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                            lineNumber: 97,
                            columnNumber: 27
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "input-group",
                    children: showCategoryInput ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "category-input-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "form-input",
                                placeholder: "New Category",
                                value: newCategory,
                                onChange: (e)=>setNewCategory(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "add-category-button",
                                onClick: handleAddCategory,
                                children: "Add"
                            }, void 0, false, {
                                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "back-category-button",
                                onClick: ()=>{
                                    setShowCategoryInput(false);
                                    setNewCategory("");
                                },
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "category",
                        id: "categorySelector",
                        value: category,
                        onChange: handleCategoryChange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select Category (optional)"
                            }, void 0, false, {
                                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this),
                            categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: cat,
                                    children: cat
                                }, cat, false, {
                                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "addCategory",
                                children: "Add Category"
                            }, void 0, false, {
                                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "add-button",
                    children: "Add Expense"
                }, void 0, false, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(AddExpenses, "VpJNmmk2RcE1C7H8X5Juuva/4w4=");
_c = AddExpenses;
var _c;
__turbopack_context__.k.register(_c, "AddExpenses");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/IncomeInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IncomeFrequency",
    ()=>IncomeFrequency,
    "default",
    ()=>IncomeInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
var IncomeFrequency = /*#__PURE__*/ function(IncomeFrequency) {
    IncomeFrequency["WEEKLY"] = "weekly";
    IncomeFrequency["BIWEEKLY"] = "biweekly";
    IncomeFrequency["MONTHLY"] = "monthly";
    IncomeFrequency["YEARLY"] = "yearly";
    return IncomeFrequency;
}({});
function IncomeInput({ income, frequency, onIncomeChange, onFrequencyChange }) {
    _s();
    const [incomeValue, setIncomeValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(income);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleIncomeChange = (e)=>{
        e.preventDefault();
        if (incomeValue < 0) {
            setError("Please enter a valid income amount.");
            return;
        }
        onIncomeChange(incomeValue);
        setError("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "income-form",
        onSubmit: handleIncomeChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            className: `form-input ${error ? 'error' : ''}`,
                            placeholder: "Enter Income",
                            value: incomeValue || '',
                            onChange: (e)=>{
                                setIncomeValue(Number(e.target.value));
                                setError("");
                            }
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/IncomeInput.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            className: "error-message",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/IncomeInput.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/IncomeInput.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: "frequency-select",
                    value: frequency,
                    onChange: (e)=>onFrequencyChange(e.target.value),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "weekly",
                            children: "Weekly"
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/IncomeInput.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "biweekly",
                            children: "Bi-weekly"
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/IncomeInput.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "monthly",
                            children: "Monthly"
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/IncomeInput.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "yearly",
                            children: "Yearly"
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/IncomeInput.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/IncomeInput.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "add-button",
                    children: "Update Income"
                }, void 0, false, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/IncomeInput.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/IncomeInput.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/IncomeInput.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(IncomeInput, "EEYoZT47lXLuLF2fAkwXmArFnRE=");
_c = IncomeInput;
var _c;
__turbopack_context__.k.register(_c, "IncomeInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Expense",
    ()=>Expense,
    "default",
    ()=>ExpenseTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Expense({ expenseName, amount, category, onExpenseChange, categories = [] }) {
    _s();
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editedName, setEditedName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(expenseName);
    const [editedAmount, setEditedAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(amount);
    const [editedCategory, setEditedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(category || '');
    const [nameError, setNameError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [amountError, setAmountError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showCategoryInput, setShowCategoryInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newCategory, setNewCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Delete button handler
    const handleDelete = ()=>{
        console.log("Delete clicked");
        if (onExpenseChange) {
            onExpenseChange((prevExpenses)=>prevExpenses.filter((e)=>e.expenseName !== expenseName));
        }
    };
    // Edit button handler
    const handleEdit = ()=>{
        setIsEditing(true);
    };
    const handleCategoryChange = (e)=>{
        if (e.target.value === "addCategory") {
            setShowCategoryInput(true);
            setEditedCategory("");
        } else {
            setShowCategoryInput(false);
            setEditedCategory(e.target.value);
        }
    };
    // Save button handler for when editing
    const handleSave = (e)=>{
        e.preventDefault();
        // Validate inputs
        if (editedName === "") {
            setNameError("Please enter an expense name.");
            return;
        }
        if (editedAmount <= 0) {
            setAmountError("Please enter a valid amount.");
            return;
        }
        if (onExpenseChange) {
            onExpenseChange((prevExpenses)=>prevExpenses.map((e)=>e.expenseName === expenseName ? {
                        expenseName: editedName,
                        amount: editedAmount,
                        category: editedCategory || undefined
                    } : e));
        }
        setIsEditing(false);
    };
    // Cancel button handler for when editing
    const handleCancel = ()=>{
        setEditedName(expenseName);
        setEditedAmount(amount);
        setEditedCategory(category || '');
        setNameError("");
        setAmountError("");
        setIsEditing(false);
    };
    // Render the component when editing
    if (isEditing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "expense-row edit-form",
            onSubmit: handleSave,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            className: `form-input ${nameError ? 'error' : ''}`,
                            value: editedName,
                            onChange: (e)=>{
                                setEditedName(e.target.value);
                                setNameError("");
                            }
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        nameError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            className: "error-message",
                            children: nameError
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                            lineNumber: 105,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "input-group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            className: `form-input ${amountError ? 'error' : ''}`,
                            value: editedAmount || '',
                            onChange: (e)=>{
                                setEditedAmount(Number(e.target.value));
                                setAmountError("");
                            }
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        amountError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            className: "error-message",
                            children: amountError
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                            lineNumber: 118,
                            columnNumber: 27
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "input-group",
                    children: showCategoryInput ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "category-input-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "form-input",
                                placeholder: "New Category",
                                value: newCategory,
                                onChange: (e)=>setNewCategory(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "add-category-button",
                                onClick: ()=>{
                                    if (newCategory) {
                                        setEditedCategory(newCategory);
                                        setNewCategory("");
                                        setShowCategoryInput(false);
                                    }
                                },
                                children: "Add"
                            }, void 0, false, {
                                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "back-category-button",
                                onClick: ()=>{
                                    setShowCategoryInput(false);
                                    setNewCategory("");
                                },
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                                lineNumber: 144,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                        lineNumber: 123,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "category",
                        id: "categorySelector",
                        value: editedCategory,
                        onChange: handleCategoryChange,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select Category (optional)"
                            }, void 0, false, {
                                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                                lineNumber: 162,
                                columnNumber: 15
                            }, this),
                            categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: cat,
                                    children: cat
                                }, cat, false, {
                                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                                    lineNumber: 164,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "addCategory",
                                children: "Add Category"
                            }, void 0, false, {
                                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                                lineNumber: 166,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                        lineNumber: 156,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "expense-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "save-button",
                            children: "Save"
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "cancel-button",
                            onClick: handleCancel,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "expense-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "expense-name",
                children: expenseName
            }, void 0, false, {
                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "expense-amount",
                children: [
                    "$",
                    amount.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "expense-actions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "expense-edit",
                        onClick: handleEdit,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEdit2"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "expense-delete",
                        onClick: handleDelete,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCloseCircleOutline"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_s(Expense, "nXPxQ7LLw7S0MaHUnAIA8h6g7w8=");
_c = Expense;
function ExpenseTable({ expenses, total, income, onExpenseChange, categories = [] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "expense-table",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "expense-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "expense-name",
                        children: "Expense"
                    }, void 0, false, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "expense-amount",
                        children: "Amount"
                    }, void 0, false, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "expense-actions"
                    }, void 0, false, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "expense-list",
                children: expenses.map((expense, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Expense, {
                        expenseName: expense.expenseName,
                        amount: expense.amount,
                        category: expense.category,
                        onExpenseChange: onExpenseChange,
                        categories: categories
                    }, index, false, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            total && total > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "expense-total",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "total-label",
                        children: "Total"
                    }, void 0, false, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "total-amount",
                        children: [
                            "$",
                            total.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                lineNumber: 228,
                columnNumber: 9
            }, this),
            income && income > 0 && total && total > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "expense-total",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "total-label",
                        children: "Remaining"
                    }, void 0, false, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "total-amount",
                        children: [
                            "$",
                            (income - total).toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
                lineNumber: 234,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_c1 = ExpenseTable;
var _c, _c1;
__turbopack_context__.k.register(_c, "Expense");
__turbopack_context__.k.register(_c1, "ExpenseTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/Category.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Category
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$app$2f$components$2f$ExpenseTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/ExpenseTable.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Category({ categoryName, budget, expenses, onExpenseChange, categories = [] }) {
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "category",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "category-header",
                onClick: ()=>setIsExpanded(!isExpanded),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "category-heading",
                        children: categoryName
                    }, void 0, false, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/Category.tsx",
                        lineNumber: 20,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `category-toggle ${isExpanded ? 'expanded' : ''}`,
                        children: "▼"
                    }, void 0, false, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/Category.tsx",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/Category.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `category-content ${isExpanded ? 'expanded' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$app$2f$components$2f$ExpenseTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    expenses: expenses,
                    onExpenseChange: onExpenseChange,
                    categories: categories
                }, void 0, false, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/Category.tsx",
                    lineNumber: 24,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/Category.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/Category.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Category, "MzqrZ0LJxgqPa6EOF1Vxw0pgYA4=");
_c = Category;
var _c;
__turbopack_context__.k.register(_c, "Category");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$app$2f$components$2f$AddExpenses$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/AddExpenses.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$app$2f$components$2f$IncomeInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/IncomeInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$app$2f$components$2f$Category$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/components/Category.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const EXPENSES = [
    {
        expenseName: "Rent",
        amount: 1000,
        category: "Housing"
    },
    {
        expenseName: "Groceries",
        amount: 200,
        category: "Food"
    },
    {
        expenseName: "Utilities",
        amount: 150,
        category: "Bills"
    },
    {
        expenseName: "Transportation",
        amount: 100,
        category: "Transport"
    }
];
const CATEGORIES = [
    "Housing",
    "Food",
    "Bills",
    "Transport"
];
function Home() {
    _s();
    const [income, setIncome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [frequency, setFrequency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$app$2f$components$2f$IncomeInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IncomeFrequency"].MONTHLY);
    const [expenses, setExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        ...EXPENSES
    ]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        ...CATEGORIES
    ]);
    const total = expenses.reduce((sum, e)=>sum + e.amount, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "App",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "My Budget"
                }, void 0, false, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$app$2f$components$2f$IncomeInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    income: income,
                    frequency: frequency,
                    onIncomeChange: setIncome,
                    onFrequencyChange: setFrequency
                }, void 0, false, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                income > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "income-display",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "income-label",
                            children: "Income:"
                        }, void 0, false, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/page.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "income-amount",
                            children: [
                                "$",
                                income.toFixed(2)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/page.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/page.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$app$2f$components$2f$AddExpenses$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    expenses: expenses,
                    onAddExpense: setExpenses,
                    categories: categories,
                    onCategoryAdd: setCategories
                }, void 0, false, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                categories.map((c)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$app$2f$components$2f$Category$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        categoryName: c,
                        expenses: expenses.filter((e)=>e.category === c),
                        onExpenseChange: setExpenses,
                        categories: categories
                    }, c, false, {
                        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/page.tsx",
                        lineNumber: 43,
                        columnNumber: 18
                    }, this);
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "button",
                    id: "backButton",
                    value: "Back",
                    className: "hidden"
                }, void 0, false, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$BudgetApp$2e$worktrees$2f$agents$2d$migrate$2d$app$2d$to$2d$nextjs$2f$budget$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "button",
                    id: "categoriesButton",
                    value: "Print Categories and Percents"
                }, void 0, false, {
                    fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/page.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/BudgetApp.worktrees/agents-migrate-app-to-nextjs/budget/app/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Home, "ROwvq3gx62QAFu7iftf53N4EAxw=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=BudgetApp_worktrees_agents-migrate-app-to-nextjs_budget_app_1on3mma._.js.map