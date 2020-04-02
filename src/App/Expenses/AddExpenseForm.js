import React, { useContext, useEffect, useCallback } from "react";
import { CTX } from "../../Store/Store";
import { Button, Form, FormGroup, Label, Input, CustomInput } from "reactstrap";
import Flatpickr from "react-flatpickr";
import { uuid } from "uuidv4";

const AddExpenseForm = () => {
  const [state, dispatch] = useContext(CTX);
  const { expensesForm, expensesList, editExpense, selectedItemId } = state;
  const { title, qty, date, description, income, payed } = expensesForm;

  // this function sanitize the fields on the form
  const addExpense = useCallback(
    () =>
      dispatch({
        type: "EXPENSE_FORM",
        payload: {
          id: uuid(),
          income: "0",
          description: "",
          title: "",
          qty: "",
          date: "",
          payed: false
        }
      }),
    [dispatch]
  );

  // This executes in case the user edits an item
  const findAndAddExpenseToForm = useCallback(() => {
    let expenseToEdit = expensesList.filter(itm => itm.id === selectedItemId);
    expenseToEdit = expenseToEdit[0];
    const { id, income, description, title, qty, date, payed } = expenseToEdit;
    let d = new Date(date);
    d = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    dispatch({
      type: "EXPENSE_FORM",
      payload: {
        id,
        income,
        description,
        title,
        qty,
        date: d,
        payed
      }
    });
  }, [dispatch, selectedItemId, expensesList]);

  // This fills the fields of the form in case it's tp create a new item or to edit an old one
  useEffect(() => {
    if (!editExpense) {
      addExpense();
    } else {
      findAndAddExpenseToForm();
    }
  }, [addExpense, findAndAddExpenseToForm, editExpense]);

  // Clears up the form when the component end its cycle
  useEffect(() => {
    return () => {
      addExpense();
    };
    // eslint-disable-next-line
  }, []);

  //
  const executeForm = e => {
    e.preventDefault();

    if (expensesForm.date === "") {
      return alert("Por favor agregar una fecha");
    }

    if (!editExpense) {
      expensesList.push(expensesForm);
    } else {
      let ind = expensesList.findIndex(x => x.id === selectedItemId);
      expensesList.splice(ind, 1, expensesForm);

      dispatch({
        type: "EDIT_EXPENSE",
        payload: false
      });
      dispatch({
        type: "SELECTED_ITEM",
        payload: false
      });
    }

    dispatch({
      type: "EXPENSES_LIST",
      payload: expensesList
    });

    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: false, content: "" }
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({
      type: "EXPENSE_FORM",
      payload: { ...expensesForm, [name]: value }
    });
  };

  return (
    <Form className="container my-3" onSubmit={executeForm}>
      <div className="form-group">
        <label htmlFor="income">Tipo</label>
        <select
          className="form-control"
          name="income"
          id="income"
          onChange={handleChange}
          value={income}
        >
          <option value="0">Gasto</option>
          <option value="1">Ingreso</option>
        </select>
      </div>

      <FormGroup>
        <Label for="title">* Título</Label>
        <Input
          type="text"
          name="title"
          value={title}
          id="title"
          required
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="qty">* Cantidad</Label>
        <Input
          type="number"
          name="qty"
          value={qty}
          id="qty"
          required
          onChange={handleChange}
        />
      </FormGroup>

      <div className="form-group">
        <label htmlFor="date">* Fecha</label>

        <Flatpickr
          id="date"
          options={{
            altFormat: "F j, Y",
            dateFormat: "D d-M-Y",
            locale: {
              firstDayOfWeek: 0
            }
          }}
          className="form-control"
          placeholder="para pagar el: "
          required={true}
          value={date}
          onChange={e => {
            dispatch({
              type: "EXPENSE_FORM",
              payload: { ...expensesForm, date: e[0].getTime() }
            });
          }}
        />
      </div>

      <FormGroup>
        <Label for="description">Descripción</Label>
        <Input
          type="textarea"
          name="description"
          value={description}
          onChange={handleChange}
          id="description"
        />
      </FormGroup>

      <FormGroup>
        <div>
          <CustomInput
            type="switch"
            id="payed"
            name="payed"
            label="Ya fue pagado"
            checked={payed}
            onChange={e => {
              const { checked } = e.target;
              dispatch({
                type: "EXPENSE_FORM",
                payload: { ...expensesForm, payed: checked }
              });
            }}
          />
        </div>
      </FormGroup>

      <div className="d-flex justify-content-around">
        <Button>enviar</Button>
      </div>
    </Form>
  );
};

export default AddExpenseForm;
